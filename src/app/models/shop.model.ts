export class Shop {
  shopItems: object;

  constructor() {
    this.shopItems = [
      {
        title: 'Botella de agua Element Isotérmica',
        desc: 'Esta botella será tu compañera ideal para poder hidratarte dónde y cuándo quieras. Tiene un diseño moderno de líneas sencillas y redondeadas muy cómodo para llevar tanto en la mano como en la bolsa.',
        picture: 'assets/images/rosa.jpg',
        price: 15.65,
      },
      {
        title: 'Botella de agua Casual',
        desc: 'Botella de agua de 550 ml de capacidad realizada en vidrio, un material robusto y resistente a las variaciones de temperatura y que destaca además por ser 100% higiénico.',
        picture: 'assets/images/casual.jpg',
        price: 13.40,
      },
      {
        title: 'Botella de agua Aquatic Deep Blue',
        desc: 'Botella metálica ideal para rellenar y reutilizar fácilmente, y así reducir la necesidad de botellas de agua de plástico de un solo uso.',
        picture: 'assets/images/mar.jpg',
        price: 11.16,
      },
    ];
  }
}
