---
title: 'Arquitetura U-Net'
author: 'Gabriel Leite Bessa'
tags: ['posts', 'deep_learning', 'computer_vision', 'ai']
date: '2023-07-21'
hero: '/posts/unet_architecture/img/u-net-architecture.png'
description: 'Postagem sobre a arquitetura UNet'
---

## Introdução

O desenvolvimento de redes neurais profundas cresceu muito nos últimos anos graças ao aumento da quantidade de dados disponíveis, ao aumento do poder computacional e os obstáculos que as técnicas de machine learning clássica começaram a enfrentar, chegando a um limite no aprendizado com essas técnicas. Isso passou  a ter um papel essêncial em tarefas de visão computacional com a criação das redes neurais convolucionais, que diferente das feed-forward neural networks, fazem o uso de filtros convolucionais para o aprendizado de características em imagens. Com isso, redes totalmente convolucionais começaram a surgir também, nas quais todas as partes da rede são compostas por camadas de convolução, sendo a U-Net uma dessas redes.

A seguir são apresentados alguns exemplos de tarefas de visão computacional:

{{< image "/posts/unet_architecture/img/different_types_of_computer_vision_tasks.webp" "Figura 1: Exemplos de tarefas de visão computacional." >}}

## Arquitetura U-Net

A U-Net é uma rede neural convolucional criada para segmentação de imagens com foco em imagens biomédicas, sendo baseada em uma rede totalmente convolucional e optimizada para trabalhar com um dataset de treinamento pequeno obtendo ainda sim bons resultados. A ideia principal da rede é ter camadas de contração e após ter camadas de expansão para que assim consiga realizar o trabalho de segmentação das imagens, sendo a primeira parte também chamada de decoder e a segunda parte de encoder.

{{< image "/posts/unet_architecture/img/encoder_decoder_with_skip_connections.webp" "Figura 2: Encoder e decoder com skip connections." >}}

A camada de contração realiza a extração das características da imagem, aumentando o número de canais após cada camada. Essa parte realiza duas convoluções com filtros 3x3 e função de ativação ReLU, no artigo original da U-Net essas convoluções não apresentam nenhum preenchimento (padding), entretanto isso acaba por reduzir o tamanho das máscaras de saída, e muitas vezes não é seguido em outras implementações. Após essas duas camadas de convolução existe uma camada de *max-pooling* com filtro 2x2, que faz a redução da resolução da imagem pela metade. Ao final existe ainda uma camada de *dropout* de 30% de probabilidade.

{{< note "Dropout: a camada de dropout é responsável por reduzir o overfitting e melhorar a generalização no dataset de teste eliminando alguns neurônios com determinada probabilidade" >}}

{{< image "/posts/unet_architecture/img/dropout.png" "Figura 3: Camada de dropout" >}}

{{< note "Função de ativação: A função de ativação é responsável por tornar a rede capaz de modelar funções não lineares." >}}

{{< image "/posts/unet_architecture/img/relu.jpg" "Figura 4: Função de ativação ReLU" >}}

Já camada de expansão realiza a o vínculo dessas características com informações espaciais da imagem. Sendo composta por uma camada de convolução upsample com stride igual a 2, uma camada de concatenação, que é usada para as skip connections, uma camada de *dropout* de 30% e duas camadas de convolução com filtro 3x3 e função de ativação ReLU.

As camadas de contração e expansão são ligadas por skip connections que são essênciais em redes neurais com muitas camadas, pois elas passam para camadas posteriores o contexto anterior e melhoram o aprendizado, sendo muito melhor a convergência de redes que a utilizam.

Ao final da rede existe uma camada de convolução com filtro 1x1 e função de ativação *softmax* que realiza a classificação dos pixels da imagem. Sendo a mesma operação que uma camada de feed-forward dense. 

{{< image "/posts/unet_architecture/img/u-net-architecture.png" "Figura 5: Arquitetura da rede U-Net." >}}

## Implementação da U-Net com Tensorflow

A seguir é demostrada um exemplo de implementação da rede U-Net utilizando Tensorflow. No exemplo os block de contração e expansão foram definidos em duas funções, *downsample_block* e *upsample_block* respectivamente.

```python
def downsample_block(x, n_filters, n_channels=1):
    x = layers.Conv2D(n_filters, n_channels, strides = 1, padding = "same", activation = "relu")(x)
    x = layers.Conv2D(n_filters, n_channels, strides = 1, padding = "same", activation = "relu")(x)
    p = layers.MaxPool2D(2)(x)
    p = layers.Dropout(0.3)(p)

    return f, p
```

```python
def upsample_block(x, conv_features, n_filters, n_channels=1):
    x = layers.Conv2DTranspose(n_filters, n_channels, strides=2, padding="same")(x)
    x = layers.concatenate([x, conv_features])
    x = layers.Dropout(0.3)(x)
    x = layers.Conv2D(n_filters, n_channels, strides = 1, padding = "same", activation = "relu")(x)
    x = layers.Conv2D(n_filters, n_channels, strides = 1, padding = "same", activation = "relu")(x)

    return x
```

Ao final é feito o uso dessas funções e a construção da rede em si:


```python
def build_unet_model(shape:tuple, n_classes:int):
    inputs = layers.Input(shape=shape)
    n_channels = shape[-1]

    # encoder: contracting path - downsample
    # 1 - downsample
    f1, p1 = downsample_block(inputs, 32, n_channels)
    # 2 - downsample
    f2, p2 = downsample_block(p1, 64, n_channels)
    # 3 - downsample
    f3, p3 = downsample_block(p2, 128, n_channels)
    # 4 - downsample
    f4, p4 = downsample_block(p3, 256, n_channels)
    # 5 - downsample
    f5, p5 = downsample_block(p4, 512, n_channels)

    # 6 - bottleneck
    bottleneck = double_conv_block(p5, 1024, n_channels)

    # decoder: expanding path - upsample
    # 7 - upsample
    u7 = upsample_block(bottleneck, f5, 512, n_channels)
    # 8 - upsample
    u8 = upsample_block(u7, f4, 256, n_channels)
    # 9 - upsample
    u9 = upsample_block(u8, f3, 128, n_channels)
    # 10 - upsample
    u10 = upsample_block(u9, f2, 64, n_channels)
    # 11 - upsample
    u11 = upsample_block(u10, f1, 32, n_channels)

    # outputs
    outputs = layers.Conv2D(n_classes, (1, 1), padding="same", activation = "softmax")(u11)

    # unet model with Keras Functional API
    unet_model = tf.keras.Model(inputs, outputs, name="U-Net")

    return unet_model
```

## Referências

Figura 1 por [Minh Tran]("https://towardsdatascience.com/understanding-u-net-61276b10f360")

Figura 2 por [Minh Tran]("https://towardsdatascience.com/understanding-u-net-61276b10f360")

Figura 3 por [Nitish](https://jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf)

Figura 4 por []()

Figura 5 por [U-Net creators](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)

[Understanding U-Net](https://towardsdatascience.com/understanding-u-net-61276b10f360)

[Introduction to ResNets](https://towardsdatascience.com/introduction-to-resnets-c0a830a288a4)

[C4W1L04 Padding](https://www.youtube.com/watch?v=smHa2442Ah4)

[An Introduction to different Types of Convolutions in Deep Learning](https://towardsdatascience.com/types-of-convolutions-in-deep-learning-717013397f4d)

[U-Net: Convolutional Networks for Biomedical Image Segmentation](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)

[U-Net: Wikipédia](https://en.wikipedia.org/wiki/U-Net)

[U-Net: Paper with code](https://paperswithcode.com/method/u-net)

[Camadas de Pooling em Redes Neurais Convolucionais](https://www.deeplearningbook.com.br/camadas-de-pooling-em-redes-neurais-convolucionais/)

[Introdução às Redes Neurais Convolucionais](https://www.deeplearningbook.com.br/introducao-as-redes-neurais-convolucionais/)

[Dropout in Neural Networks](https://towardsdatascience.com/dropout-in-neural-networks-47a162d621d9)

[C4W2L04 Why ResNets Work](https://www.youtube.com/watch?v=RYth6EbBUqM)

[Funções de ativação: definição, características, e quando usar cada uma](https://iaexpert.academy/2020/05/25/funcoes-de-ativacao-definicao-caracteristicas-e-quando-usar-cada-uma/?doing_wp_cron=1690209521.0830559730529785156250)