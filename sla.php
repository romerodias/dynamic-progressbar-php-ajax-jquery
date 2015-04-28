<?php
/**
 * Crate some fake data to update the progress bar
 */
$result = array("SLA" => rand(1,100));
$json = json_encode($result); 
echo $json;
