//let newExperience = experience(img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link)
const experiences = [];

const createExperience = (img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link) => {
  let experience = {
    img: img,
    empresa: empresa,
    fechas: fechas,
    responsabilidad1: responsabilidad1,
    responsabilidad2: responsabilidad2,
    responsabilidad3: responsabilidad3,
    link: link,
  }
  experiences.push(experience)
}


// const listOfProducts = () => {
//   let macBookAir12 = createProduct('Macbook Air', 1000, 4, 100, 'Apple', 'https://thumb.pccomponentes.com/w-530-530/articles/1039/10392488/1935-apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-gris-espacial.jpg')
//   let macBookPro = createProduct('Macbook Pro', 1500, 4, 3, 'Apple', 'https://thumb.pccomponentes.com/w-530-530/articles/33/335377/1575-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-gris-espacial.jpg')
//   let macBookProMax = createProduct('Macbook Pro Max', 2000, 1, 1, 'Apple', 'https://thumb.pccomponentes.com/w-530-530/articles/1039/10392479/1202-apple-macbook-pro-apple-m2-8gb-256gb-ssd-gpu-deca-core-133-plata.jpg')
//   let hpEssential = createProduct('HP Essentials', 1000, 4, 200, 'Hp', 'https://thumb.pccomponentes.com/w-530-530/articles/1073/10733296/1176-hp-victus-15-fa0053ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156.jpg')
//   let hpPro = createProduct('HP Pro', 1500, 4, 10, 'Hp', 'https://thumb.pccomponentes.com/w-530-530/articles/1042/10428550/156-hp-15s-fq5028ns-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg')
//   let alienWare12 = createProduct('Alienware 12"', 1000, 3, 20, 'Dell', 'https://m.media-amazon.com/images/I/81UKmA-HCVL.__AC_SY300_SX300_QL70_ML2_.jpg')
//   let alienWarePro = createProduct('Alienware Pro', 1500, 4, 20, 'Dell', 'https://m.media-amazon.com/images/I/71YUYGSPwwL.__AC_SY300_SX300_QL70_ML2_.jpg')
//   let alienWareProMax = createProduct('Alienware Pro Max', 2000, 5, 2, 'Dell', 'https://m.media-amazon.com/images/I/71Fztn9iCmL.__AC_SX300_SY300_QL70_ML2_.jpg')
//   let huaweiOne = createProduct('Huawei One', 1000, 2, 4, 'Huawei', 'https://m.media-amazon.com/images/I/61Zj88xI2PL._AC_UL800_FMwebp_QL65_.jpg')
//   let huaweiTwo = createProduct('Huawei Two', 1500, 5, 4, 'Huawei', 'https://m.media-amazon.com/images/I/71kvpcfu5KL._AC_UL800_FMwebp_QL65_.jpg')
// };
// listOfProducts();