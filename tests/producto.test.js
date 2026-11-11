// Pruebas de la funcionalidad Producto
// Fase TEST - Sistema de Inventario
// Herramienta: Jest

const Producto = require("../src/producto");

// Casos de prueba definidos en la fase TEST
// CP01 Crear un producto       -> P001, Teclado, 350, 10
// CP02 Mostrar el código       -> P001
// CP03 Mostrar el nombre       -> Teclado
// CP04 Mostrar el precio       -> 350
// CP05 Mostrar la existencia   -> 10
// CP06 Mostrar información completa -> los cuatro datos
// CP07 Crear otro producto     -> P002, Mouse, 180, 5

describe("Funcionalidad Producto", () => {
  // CP01 - Crear un producto con los datos proporcionados
  test("CP01 - Crear un producto con código P001, nombre Teclado, precio 350 y existencia 10", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);

    expect(producto.codigo).toBe("P001");
    expect(producto.nombre).toBe("Teclado");
    expect(producto.precio).toBe(350);
    expect(producto.existencia).toBe(10);
  });

  // CP02 - El código se almacena y muestra correctamente
  test("CP02 - Mostrar el código: P001", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);

    expect(producto.codigo).toBe("P001");
  });

  // CP03 - El nombre corresponde al producto creado
  test("CP03 - Mostrar el nombre: Teclado", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);

    expect(producto.nombre).toBe("Teclado");
  });

  // CP04 - El precio se almacena y muestra correctamente
  test("CP04 - Mostrar el precio: 350", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);

    expect(producto.precio).toBe(350);
  });

  // CP05 - La existencia coincide con el valor registrado
  test("CP05 - Mostrar la existencia: 10", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);

    expect(producto.existencia).toBe(10);
  });

  // CP06 - mostrarInfo() presenta todos los datos del producto
  test("CP06 - Mostrar información completa del producto", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);

    const salida = jest.spyOn(console, "log");
    producto.mostrarInfo();

    expect(salida).toHaveBeenCalledWith("Código:     P001");
    expect(salida).toHaveBeenCalledWith("Nombre:     Teclado");
    expect(salida).toHaveBeenCalledWith("Precio:     $350");
    expect(salida).toHaveBeenCalledWith("Existencia: 10");

    salida.mockRestore();
  });

  // CP07 - Crear otro producto sin confundir sus datos con el primero
  test("CP07 - Crear segundo producto: P002, Mouse, 180, 5", () => {
    const producto1 = new Producto("P001", "Teclado", 350, 10);
    const producto2 = new Producto("P002", "Mouse", 180, 5);

    expect(producto2.codigo).toBe("P002");
    expect(producto2.nombre).toBe("Mouse");
    expect(producto2.precio).toBe(180);
    expect(producto2.existencia).toBe(5);

    // Los datos del primer producto no se alteran
    expect(producto1.codigo).toBe("P001");
    expect(producto1.nombre).toBe("Teclado");
    expect(producto1.precio).toBe(350);
    expect(producto1.existencia).toBe(10);
  });
});
