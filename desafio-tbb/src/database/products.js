const products = [
  {
    data: {
      nodes: [
        {
          name: "Rexona Clinical Men Antitranspirante Aerosol Sport Strengh 110ml",
          shortDescription:
            "3 veces más protección que un antitranspirante común con el desodorante Rexona Clinical",
          id: "-e1a21962-4363-57d5-9d75-09c5dc7ea624",
          images: [
            {
              alt: "Envase de Antitranspirante en Aerosol Rexona Clinical hombre Sport Strengh 110ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/c70768fb7259661875914a289ea8791b3809db4c-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Clinical Women Antitranspirante Aerosol",
          shortDescription:
            "3 veces más protección que un antitranspirante común con el desodorante Rexona Clinical",
          id: "-cf4c09de-1995-546e-99d3-229b4f9623aa",
          images: [
            {
              alt: "Envase de Rexona Clinical Women Antitranspirante Aerosol Classic 110ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/2f17a20b938822773c5886ef65691ae72521d414-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Men Antitranspirante Aerosol XTRA COOL 150ml",
          shortDescription:
            "Antitranspirante en aerosol XtraCool brinda 72hs de protección, respondiendo directamente al movimiento, manteniéndote seco, fresco y protegido como nunca antes.",
          id: "-1341c358-6032-5e09-971b-222a096496c1",
          images: [
            {
              alt: "Envase de desodorante en aerosol Rexona Men Antitranspirante XTRA COOL 150ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/fa27f9e581b885704b6f646e3d1c9bcc8642172e-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Clinical Women Antitranspirante Aerosol Mini",
          shortDescription:
            "3 veces más protección que un antitranspirante común con el desodorante clinical aerosol classic para mujer, ahora en tamaño mini.",
          id: "-96d15f83-22cd-53fa-b6ca-fa88e54b2d4c",
          images: [
            {
              alt: "Imagen de aerosol Rexona Clinical Women Antitranspirante Classic 55ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/6a54132b81da200a93fbb6690eb14562646e0c90-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Men Antitranspirante Aerosol V8 Laton",
          shortDescription:
            "Antitranspirante en aerosol con tecnología MotionSense, desarrollado especialmente para los fanáticos de los autos, protección por 72hs en tamaño ahorro.",
          id: "-4217fd75-1ad8-5827-862a-b4302b4f8285",
          images: [
            {
              alt: "Imagen de envase Rexona para hombres Antitranspirante Aerosol V8 250ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/9a49289f8d784e2cc51079f509ff9d0cc89c1ff6-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Alcohol en Gel Fresh 250ml",
          shortDescription:
            "¡Tus manos protegidas en todo momento, donde sea que estés! Vos disfrutá tu día que Rexona se encarga de los gérmenes",
          id: "-3805d7a4-1c67-585b-8d82-97ddac9eb1ea",
          images: [
            {
              alt: "Rexona Alcohol en Gel Fresh 250ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/0bab9be78f6299e8ace43661c16a9950ec9e2042-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "4ddf279fad495146ed00ea00927f476210b08c2bc07bc2a88163fa1a",
            name: "Alcohol en Gel",
          },
        },
        {
          name: "Rexona Odorono Antitranspirante Aerosol 150ml",
          shortDescription:
            "Desodorante antitranspirante Rexona Odorono en aerosol, frescura y protección para cada movimiento.",
          id: "-b143dd6e-6f16-5f89-b391-7bf0416561a9",
          images: [
            {
              alt: "Imagen de aerosol Odorono Antitranspirante de 150ml Rexona",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/25e58e382b944766f4cfe5a76e56745f6576d905-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Clinical Men Antitranspirante Aerosol Clean Mini",
          shortDescription:
            "3 veces más protección que un antitranspirante común con el desodorante clinical aerosol clean para hombre, ahora en versión mini.",
          id: "-ece4a7ab-82a3-5e35-a483-ee3437302c25",
          images: [
            {
              alt: "Imagen de aerosol Rexona Clinical Men Antitranspirante Clean Mini 55ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/59ca3909d0475b06639c9c3b3d9585615365a534-5000x5000.jpg",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Clinical Women Antitranspirante Aerosol Extra dry 110ml",
          shortDescription:
            "3 veces más protección que un antitranspirante común con el desodorante clinical aerosol classic para mujer",
          id: "-8e26c494-b4cb-58cd-93a4-3c4ee1f026fe",
          images: [
            {
              alt: "Envase de Antitranspirante en Aerosol Rexona Clinical Women Extra dry 110ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/873c44c56e92353b5e37d91aeac252f3242cda02-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "Aerosol",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Men Antitranspirante Barra V8 50gr",
          shortDescription:
            "Rexona v8, pensado para los fanáticos de los autos.",
          id: "-bfc8f9fd-f47c-5cfb-837c-44b9a6bc0efc",
          images: [
            {
              alt: "Envase de desodorante antitranspirante en Barra Rexona Men V8 50gr",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/f3571456a98ed559194c51ca82a6bae7c333b434-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "4c2e58a1f57afcacb9720beade4fa76b68510a779425e954d8c693b3",
            name: "Barra",
          },
        },
        {
          name: "Rexona Women Antitranspirante Barra Nutritive 50gr",
          shortDescription:
            "Rexona Nutritive enriquece tus axilas con nutrientes fundamentales, ayudando a mejorar la textura natural de la piel",
          id: "-cb88855c-8325-5a05-8de8-bb629b83c8c6",
          images: [
            {
              alt: "Envase de Antitranspirante en Barra Rexona Women Nutritive 50gr",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/fd66738c466729c6427444140399b2a72c094471-3000x3000.tif",
              },
            },
          ],
          category: {
            _id: "4c2e58a1f57afcacb9720beade4fa76b68510a779425e954d8c693b3",
            name: "Barra",
          },
        },
        {
          name: "Rexona Jabón Líquido Antibacterial Fresh 220ml",
          shortDescription:
            "Elimina el 99,9% de las bacterias y sus ingredientes brindan beneficios de una limpieza profunda y una frescura energizante.",
          id: "-7199d522-3d5e-59a2-a839-07507d9db125",
          images: [
            {
              alt: "Envase repuesto de Jabón Líquido Rexona Antibacterial Fresh 220ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/01a6e6507c0a1e95eedf034ae3d2a25c634a2474-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "3b6358c4e18cf03b4f2a932ab184e2b39984d85f27d519f4633af7ab",
            name: "Jabón Líquido",
          },
        },
        {
          name: "Rexona Jabón Antibacterial Fresh 90gr",
          shortDescription:
            "Elimina el 99,9% de las bacterias y tienen 10 veces más protección antibacterial. Con ingredientes que brindan beneficios una limpieza profunda y una frescura energizante.",
          id: "-9e0b003c-b2c9-54f0-9446-796c992cfb69",
          images: [
            {
              alt: "Envase de Jabón Antibacterial Rexona Fresh 90 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/5fa3b3a155919883315c666edd3ee3cbd161041b-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "67ce1f0eb28f56ed8a004be1d1443b02c66e987066cd73f21aa14681",
            name: "Jabón Barra",
          },
        },
        {
          name: "Rexona Jabón Antibacterial Fresh 3x90gr",
          shortDescription:
            "Elimina el 99,9% de las bacterias y tienen 10 veces más protección antibacterial. Con ingredientes que brindan beneficios una limpieza profunda y una frescura energizante.",
          id: "-1362f4c2-1bbe-56e6-a1b3-9600fa79d48f",
          images: [
            {
              alt: "Envase de Jabón Antibacterial Rexona Fresh pack de 3 unidades por 90 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/ad49a164b8f78420ebd87ef2d13e3422f057a57b-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "67ce1f0eb28f56ed8a004be1d1443b02c66e987066cd73f21aa14681",
            name: "Jabón Barra",
          },
        },
        {
          name: "Rexona Jabón Líquido Antibacterial Aloe 220ml",
          shortDescription:
            "Elimina el 99,9% de las bacterias y sus ingredientes brindan beneficios de una limpieza profunda y una frescura energizante.",
          id: "-359261d0-46ec-5e46-adc1-21dcd5e8de7f",
          images: [
            {
              alt: "Envase de repuesto de Jabón Líquido Rexona Antibacterial Aloe 220ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/13cf0087c9cd47b72229e26aae628a1da910b0fa-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "3b6358c4e18cf03b4f2a932ab184e2b39984d85f27d519f4633af7ab",
            name: "Jabón Líquido",
          },
        },
        {
          name: "Rexona Jabón Líquido Antibacterial Original 220ml",
          shortDescription:
            "Elimina el 99,9% de las bacterias y sus ingredientes brindan beneficios de una limpieza profunda y una frescura energizante.",
          id: "-c0632023-d4b3-566e-b169-7f8236aabb10",
          images: [
            {
              alt: "Pack de Jabón Líquido de repuesto Rexona Antibacterial Original 220 ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/9588566666794a49724b557dc8c9d520f6c1b9f1-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "3b6358c4e18cf03b4f2a932ab184e2b39984d85f27d519f4633af7ab",
            name: "Jabón Líquido",
          },
        },
        {
          name: "Rexona Jabón Antibacterial Aloe 90gr",
          shortDescription:
            "Elimina el 99,9% de las bacterias y tienen 10 veces más protección antibacterial. Con ingredientes que brindan beneficios una limpieza profunda y una frescura energizante.",
          id: "-a4972c6f-a575-5b63-b0bd-5550c6ced525",
          images: [
            {
              alt: "Envase de Jabón Antibacterial Rexona Aloe 90 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/6ea4187b5ade7df7dc762d02baf8d2342fc46373-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "67ce1f0eb28f56ed8a004be1d1443b02c66e987066cd73f21aa14681",
            name: "Jabón Barra",
          },
        },
        {
          name: "Rexona Jabón Antibacterial Original 90gr",
          shortDescription:
            "Elimina el 99,9% de las bacterias y tienen 10 veces más protección antibacterial. Con ingredientes que brindan beneficios una limpieza profunda y una frescura energizante.",
          id: "-a7a6cafb-1afc-593c-a239-60aa95cafc26",
          images: [
            {
              alt: "Envase de Jabón Antibacterial Rexona Original 90 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/14231b4eef6b0ca5926c93376412e0afb716184a-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "67ce1f0eb28f56ed8a004be1d1443b02c66e987066cd73f21aa14681",
            name: "Jabón Barra",
          },
        },
        {
          name: "Rexona Jabón Antibacterial Aloe 3x90gr",
          shortDescription:
            "Elimina el 99,9% de las bacterias y tienen 10 veces más protección antibacterial. Con ingredientes que brindan beneficios una limpieza profunda y una frescura energizante.",
          id: "-39bed599-d854-54f6-acfd-7195965861c4",
          images: [
            {
              alt: "Envase de Jabón Antibacterial Rexona Aloe pack de 3 unidades de 90 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/4c297c77cb01864b9b1af32e2138cb52237bb066-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "67ce1f0eb28f56ed8a004be1d1443b02c66e987066cd73f21aa14681",
            name: "Jabón Barra",
          },
        },
        {
          name: "Rexona Jabón Antibacterial Original 3x90gr",
          shortDescription:
            "Elimina el 99,9% de las bacterias y tienen 10 veces más protección antibacterial. Con ingredientes que brindan beneficios una limpieza profunda y una frescura energizante.",
          id: "-cfb3b753-2d77-50a4-aeac-d0739beb2487",
          images: [
            {
              alt: "Envase de Jabón Antibacterial Rexona Original pack de 3 unidades por 90 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/98d28f467c854ea01a9d880711691c8040025c03-5000x5000.png",
              },
            },
          ],
          category: {
            _id: "67ce1f0eb28f56ed8a004be1d1443b02c66e987066cd73f21aa14681",
            name: "Jabón Barra",
          },
        },
        {
          name: "Rexona Clinical Men Antitranspirante Aerosol Clean",
          shortDescription:
            "3 veces más protección que un antitranspirante común con el desodorante Rexona Clinical",
          id: "-5fc1b96e-d267-5726-842a-909053e60bb1",
          images: [
            {
              alt: "Envase de Antitranspirante en Aerosol Rexona Clinical Men Clean 110ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/e1c95ec64c4cb318730945aa8452fa68b6da5a31-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
        {
          name: "Rexona Alcohol en Gel Fresh 65ml",
          shortDescription:
            "¡Tus manos protegidas en todo momento, donde sea que estés! Vos disfrutá tu día que Rexona se encarga de los gérmenes",
          id: "-ec0647af-1c89-5063-8608-0ddf692bd797",
          images: [
            {
              alt: "Rexona Alcohol en Gel Fresh 65ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/07d3cd6171eedf6622f39c06d448cedd7ce89fd3-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "4ddf279fad495146ed00ea00927f476210b08c2bc07bc2a88163fa1a",
            name: "Alcohol en Gel",
          },
        },
        {
          name: "Rexona Alcohol en Gel Original 250ml",
          shortDescription:
            "¡Tus manos protegidas en todo momento, donde sea que estés! Vos disfrutá tu día que Rexona se encarga de los gérmenes",
          id: "-e4cf0b64-823f-55b8-99fd-d55deaab5aba",
          images: [
            {
              alt: "Envase de Alcohol en Gel Rexona Original 250ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/48fa97b940db442e7bcad91bc798e21cde962aaa-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "4ddf279fad495146ed00ea00927f476210b08c2bc07bc2a88163fa1a",
            name: "Alcohol en Gel",
          },
        },
        {
          name: "Rexona Alcohol en Spray 125ml",
          shortDescription:
            "¡Tus manos protegidas en todo momento, donde sea que estés! Vos disfrutá tu día que Rexona se encarga de los gérmenes",
          id: "-8b4e2618-8d45-57b2-a8b4-c05fbf894eaf",
          images: [
            {
              alt: "Envase de Alcohol en Spray Rexona 125ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/8e4d93818ac8cc6d7ca24dd7470c25a4f8c92f03-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "9914cefe28a5047fc5c08864ef6ff2ae10e37552eeccc7fc80c79c32",
            name: "Alcohol en Spray",
          },
        },
        {
          name: "Rexona Alcohol en Gel Sin Perfume 300ml",
          shortDescription:
            "¡Tus manos protegidas en todo momento, donde sea que estés! Vos disfrutá tu día que Rexona se encarga de los gérmenes",
          id: "-3bef0102-683f-5004-a790-6d2db418a633",
          images: [
            {
              alt: "Envase de Alcohol en Gel Rexona Sin Perfume 300ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/b06f20ce0d5495bb830efc92774922499d2a44d7-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "4ddf279fad495146ed00ea00927f476210b08c2bc07bc2a88163fa1a",
            name: "Alcohol en Gel",
          },
        },
        {
          name: "Rexona Alcohol en Aerosol Antibacterial 75ml",
          shortDescription:
            "¡Tus manos protegidas en todo momento, donde sea que estés! Vos disfrutá tu día que Rexona se encarga de los gérmenes",
          id: "-12079221-9787-5bb3-9d36-6c55c1552e2d",
          images: [
            {
              alt: "Envase de Alcohol en Aerosol Rexona 75ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/4cb8aca1dd91c3a32ede787e3e45d712ad33283b-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "f7076f874fda3e8774a247ba8ad9a65c7f1a48308be4f67990c48c08",
            name: "Alcohol en Aerosol",
          },
        },
        {
          name: "Rexona Alcohol en Aerosol Boca 75ml",
          shortDescription:
            "¡Llevá tu fanatismo a todos lados! La protección de tus manos y de tu pasión con la edición de Boca donde sea que estés. ",
          id: "-14f1547d-8325-55c3-b6c4-d755d7f65fa0",
          images: [
            {
              alt: "Envase de Alcohol en Aerosol Rexona Boca 75ml ",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/f0bf2509a9ccda24c22816fcb62de0a59aa76cf3-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "f7076f874fda3e8774a247ba8ad9a65c7f1a48308be4f67990c48c08",
            name: "Alcohol en Aerosol",
          },
        },
        {
          name: "Rexona Alcohol en Aerosol River 75ml",
          shortDescription:
            "¡Llevá tu fanatismo a todos lados! La protección de tus manos y de tu pasión con la edición de River donde sea que estés. ",
          id: "-72353ed9-ef26-5c9e-b1aa-e7c83158b664",
          images: [
            {
              alt: "Rexona Alcohol en Aerosol River 75ml",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/dd318dc74fc1b4b95d04ee170d32e7361a675a35-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "f7076f874fda3e8774a247ba8ad9a65c7f1a48308be4f67990c48c08",
            name: "Alcohol en Aerosol",
          },
        },
        {
          name: "Rexona Efficient Desodorante Pédico Talco 100gr",
          shortDescription:
            "Los pies son la parte del cuerpo que más se mueve y esfuerza. Es hora de reinvindicarlos, manteniéndolos frescos y secos con Efficient, la protección de Rexona para tus pies.",
          id: "-823c227c-1b4f-597a-943a-9bf40df78d7d",
          images: [
            {
              alt: "Envase de talco Efficient Rexona Desodorante Pédico de 100 gramos ",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/4daa730dbf718cab076e2b2b473e3508349b620c-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "daeefa3ead07d87e55d9297ce21d7852f9eaa005295871d7416955e3",
            name: "Talco",
          },
        },
        {
          name: "Rexona Efficient Desodorante Pédico Talco 200gr",
          shortDescription:
            "Los pies son la parte del cuerpo que más se mueve y esfuerza. Es hora de reinvindicarlos, manteniéndolos frescos y secos con Efficient, la protección de Rexona para tus pies.",
          id: "-d9e69b34-2d70-5716-b70a-e70f44327314",
          images: [
            {
              alt: "Envase de talco Rexona Efficient Desodorante Pédico 200 gramos",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/fbcdd3cf3cbbce2912f252b7d23de1a7d441037d-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "daeefa3ead07d87e55d9297ce21d7852f9eaa005295871d7416955e3",
            name: "Talco",
          },
        },
        {
          name: "Rexona Efficient Desodorante Pédico Aerosol 153ml",
          shortDescription: "Mantené tus pies frescos y secos con Efficient",
          id: "-035e1d5c-a0be-5df8-9843-0daac784079c",
          images: [
            {
              alt: "Envase de Desodorante Pédico en Aerosol Efficient 153gml Rexona",
              asset: {
                url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/c4adaa808815b15d692fbd0eebeb2298029dd94b-5000x5000.tif",
              },
            },
          ],
          category: {
            _id: "bbf9aaa9b8d897480f9e0ade81c087843bf18590fa053eca43e6966e",
            name: "Aerosol",
          },
        },
      ],
    },
  },
];

export default products;
