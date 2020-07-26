<?php

namespace App\Libs;

trait ApiFeedbackSender {
  private function sendError($data) {
    return json_encode([
        'error' => true,
        'data' => $data
    ]);
  } 

  private function sendSuccess($data) {
    return json_encode([
        'error' => false,
        'data' => $data
    ]);
  } 
}