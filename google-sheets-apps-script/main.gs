/**
 * Google Sheets Landing Form Web App
 *
 * Este script recebe as solicitações de diagnóstico técnico da Landing Page
 * e as grava na planilha do Google Sheets sob a aba "leads", atualizando
 * registros duplicados pelo mesmo ID de sessão para evitar spam ou duplicidades.
 *
 * Como implantar no Google Sheets:
 * 1. Crie uma nova planilha Google Sheets ou use uma existente.
 * 2. Crie uma aba nomeada exatamente como "leads" (em minúsculo).
 * 3. Vá em "Extensões" > "Apps Script".
 * 4. Apague todo o código padrão e cole o conteúdo deste arquivo.
 * 5. Clique em salvar (ícone de disquete).
 * 6. Vá no botão "Implantar" (canto superior direito) > "Nova implantação".
 * 7. Selecione o tipo de engrenagem "Tipo" e clique em "Aplicativo da Web".
 * 8. Defina as configurações:
 *    - Descrição: LP Diagnóstico Leads
 *    - Executar como: "Você" (seu e-mail da conta do Google)
 *    - Quem tem acesso: "Qualquer pessoa" (isso é vital para permitir envios públicos sem autenticação)
 * 9. Clique em "Implantar". Autorize as permissões de acesso na sua conta Google caso solicitado.
 * 10. Copie a "URL do aplicativo da Web" gerada (termina com "/exec") e configure no seu arquivo .env
 *     como PUBLIC_GOOGLE_SHEETS_WEB_APP_URL="SUA_URL_AQUI".
 *
 * IMPORTANTE: Sempre que fizer alterações neste script, crie uma "Nova versão" de implantação.
 */

const SHEET_NAME = "leads";
const ID_COLUMN_NAME = "id";
const HEADERS = [
  "id",
  "data",
  "nome",
  "telefone",
  "email",
  "perfil",
  "empresa",
  "mensagem",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "msclkid",
  "ttclid"
];

function doGet() {
  return jsonResponse({
    status: "ok",
    message: "Webhook de Leads funcionando com sucesso. Envie dados via POST.",
    timestamp: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    var payload = parsePayload(e);
    if (!payload || (!payload.email && !payload.telefone)) {
      return jsonResponse({ status: "error", message: "Lead sem email ou telefone para contato." });
    }

    var sheet = getOrCreateSheet();
    ensureHeaders(sheet);

    var id = payload[ID_COLUMN_NAME] || "";
    var existingRow = id ? findRowById(sheet, id) : -1;
    var row = buildRow(payload);

    if (existingRow !== -1) {
      sheet.getRange(existingRow, 1, 1, HEADERS.length).setValues([row]);
      return jsonResponse({ status: "updated", id: id });
    }

    sheet.appendRow(row);
    return jsonResponse({ status: "created", id: id });
  } catch (error) {
    return jsonResponse({
      status: "error",
      message: String(error && error.message ? error.message : error)
    });
  }
}

function parsePayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("POST sem corpo de dados (body).");
  }

  return JSON.parse(e.postData.contents);
}

function getOrCreateSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeaders(sheet) {
  var current = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), HEADERS.length)).getValues()[0];
  var shouldWrite = false;

  for (var i = 0; i < HEADERS.length; i++) {
    if (current[i] !== HEADERS[i]) {
      shouldWrite = true;
      break;
    }
  }

  if (shouldWrite) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function findRowById(sheet, id) {
  var idColumnIndex = HEADERS.indexOf(ID_COLUMN_NAME) + 1;
  if (idColumnIndex < 1 || sheet.getLastRow() < 2) return -1;

  var values = sheet.getRange(2, idColumnIndex, sheet.getLastRow() - 1, 1).getValues();

  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]) === String(id)) {
      return i + 2;
    }
  }

  return -1;
}

function buildRow(payload) {
  return HEADERS.map(function(header) {
    if (header === "data" && payload[header]) {
      return new Date(payload[header]);
    }

    return payload[header] || "";
  });
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
