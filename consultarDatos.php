<?php
header("Content-Type: application/json; charset=UTF-8");
if (isset($_GET['dni'])) {
    $dni = (isset($_GET['dni'])) ? $_GET['dni'] : '';
    if (strlen($dni) == 8) {
        $html            = file_get_contents('http://aplicaciones007.jne.gob.pe/srop_publico/Consulta/Afiliado/GetNombresCiudadano?DNI=' . $dni); //Convierte la información de la URL en cadena
        $apellidoPaterno = "";
        $apellidoMaterno = "";
        $nombres         = "";
        $temp            = 0;
        for ($i = 0; $i < strlen($html); $i++) {
            if ($temp == 0) {
                if (substr($html, $i, 1) == '|') {
                    $temp = 1;
                } else {
                    $apellidoPaterno .= substr($html, $i, 1);
                }
            } elseif ($temp == 1) {
                if (substr($html, $i, 1) == '|') {
                    $temp = 2;
                } else {
                    $apellidoMaterno .= substr($html, $i, 1);
                }
            } else {
                $nombres .= substr($html, $i, 1);
            }
        }

        $persona = new stdClass;

        $persona->nombres         = $nombres;
        $persona->apellidoPaterno = $apellidoPaterno;
        $persona->apellidoMaterno = $apellidoMaterno;

        $myJSON = json_encode($persona);

        echo $myJSON;
    } else {
        echo '{"nombres":"","apellidoPaterno":"","apellidoMaterno":""}';
    }
}else{
    echo '{"nombres":"","apellidoPaterno":"","apellidoMaterno":""}';
}