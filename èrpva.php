<!DOCTYPE html><html lang=en><meta charset=UTF-8><meta name="viewport" content="width=device-width, initial-scale=1"><title>STOP</title><style>body{background-color:#000;color:#fff;text-align:center}a{color:#fff}</style><body><br><br><h1>
<?php
// per prima cosa verifico che il file sia stato effettivamente caricato
if (!isset($_FILES['userfile']) || !is_uploaded_file($_FILES['userfile']['tmp_name'])) {
  echo 'Non hai inviato nessun file... ';
}else{

//percorso della cartella dove mettere i file caricati dagli utenti
$uploaddir = './img/';

//Recupero il percorso temporaneo del file
$userfile_tmp = $_FILES['userfile']['tmp_name'];

//recupero il nome originale del file caricato
$userfile_name = $_FILES['userfile']['name'];
$nomecomp=$uploaddir . $userfile_name;

//echo $nomecomp."<br>";


if (file_exists($uploaddir.$userfile_name)){
$path_parts = pathinfo($nomecomp);
$nomecomp=$uploaddir.$path_parts['filename'].filesize($userfile_tmp).'.'.$path_parts['extension'];
//echo $nomecomp;
if (file_exists($nomecomp)){
echo 'Upload something else!!!';
//fine se esiste anche la seconda copia
}else{
  //il file esiste ma lo carico comunque
  //copio il file dalla sua posizione temporanea alla mia cartella upload
  if (move_uploaded_file($userfile_tmp, $nomecomp)) {
    //Se l'operazione è andata a buon fine...

    header("Location: https://shrph.altervista.org/img.php?img=".$userfile_name);
    echo '<a href="./img.php?img='.$userfile_name.'">copia</a>';
    echo '<br/><br/><img src="/img/'.$userfile_name.'"/>';

  }else{
    //Se l'operazione è fallta...
    echo 'Upload NON valido!';
  }
}
//fine se esiste già il file
}else{
//upload normale
if (move_uploaded_file($userfile_tmp, $nomecomp)) {
  //Se l'operazione è andata a buon fine...

  header("Location: https://shrph.altervista.org/img.php?img=".$userfile_name);
  echo '<a href="./img.php?img='.$userfile_name.'">copia</a>';
  echo '<br/><br/><img src="/img/'.$userfile_name.'"/>';

}else{
  //Se l'operazione è fallta...
  echo 'Upload NON valido!';
}
}
//fine se non esiste nessun file
}



?>
<br><a href="/">BACK</a></h1></body></html>
