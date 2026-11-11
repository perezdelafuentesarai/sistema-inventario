// Funcionalidad Producto - Sistema de Inventario
// Fase de codificación

class Producto {
  /**
   * @param {string} codigo     Código del producto (ej. P001)
   * @param {string} nombre     Nombre del producto (ej. Teclado)
   * @param {number} precio     Precio del producto (ej. 350)
   * @param {number} existencia Existencia en inventario (ej. 10)
   */
  constructor(codigo, nombre, precio, existencia) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.existencia = existencia;
  }

  /**
   * Muestra en pantalla la información completa del producto:
   * código, nombre, precio y existencia.
   */
  mostrarInfo() {
    console.log("Información del producto");
    console.log("Código:     " + this.codigo);
    console.log("Nombre:     " + this.nombre);
    console.log("Precio:     $" + this.precio);
    console.log("Existencia: " + this.existencia);
    console.log("----------------------------------");
  }
}

module.exports = Producto;
