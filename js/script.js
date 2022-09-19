
const passwordVal = (pass) => {
    let tries = 3
    let correcto = false

    while (tries > 0 && !correcto) {
        pass = prompt("Introduce la contraseña")
        if (pass == "DAW2") {
            correcto = true
            return true

        } else {
            tries--
            if (tries > 0) {
                alert("Contraseña incorrecta, te quedan " + tries + " intentos")
            } else {
                alert("Contraseña incorrecta, no te quedan intentos")
                return false
            }
        }
    }
}

const menu=()=>{
    return parseInt(prompt("Elegir Opción:\n 1.Sacar dinero \n 2.Ingresar dinero \n 3.Consultar Saldo \n 4. Cambiar contraseña \n 5.Salir"))
}

const sacarDinero=(saldo)=>{
    let cantidad = parseInt(prompt("Introduce la cantidad a retirar"))
    if (cantidad > saldo) {
        alert("No tienes suficiente saldo")
    } else {
        saldo -= cantidad
        alert("Has retirado " + cantidad + "€")
    }
    return saldo
}

const ingresarDinero=(saldo)=>{
    let cantidad = parseInt(prompt("Introduce la cantidad a ingresar"))
    saldo += cantidad
    alert("Has ingresado " + cantidad + "€")
    return saldo
}

const consultarSaldo=(saldo)=>{
    alert("Tu saldo es de " + saldo + "€")
}

const cambiarPass=()=>{
    let pass = prompt("Introduce la nueva contraseña")
    alert("Contraseña cambiada correctamente")
    return pass
}

const cajero=()=>{
    let saldo = 600
    let pass = "DAW2"
    let salir = false

    if (passwordVal(pass)) {
        while (!salir) {
            switch (menu()) {
                case 1:
                    saldo = sacarDinero(saldo)
                    break
                case 2:
                    saldo = ingresarDinero(saldo)
                    break
                case 3:
                    consultarSaldo(saldo)
                    break
                case 4:
                    pass = cambiarPass()
                    break
                case 5:
                    salir = true
                    break
                default:
                    alert("Opción incorrecta")
                    break
            }
        }
    }
}
cajero()