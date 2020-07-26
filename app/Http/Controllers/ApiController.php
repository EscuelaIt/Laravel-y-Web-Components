<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libs\ApiFeedbackSender;
use Auth;
use App\Counter;

class ApiController extends Controller
{
    use ApiFeedbackSender;
    
    public function getUser() {
        if(!Auth::check()) {
            return $this->sendSuccess(['loggedIn' => false]);
        }
        $user = Auth::user();
        return $this->sendSuccess([
            'loggedIn' => true,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]
        ]);
    }

    public function incrementCounter(Request $request) {
        if(!Auth::check()) {
            return $this->sendError(['msg' => 'Debes estar autenticado para votar']);
        }
        $counterId = $request->input('id');
        if(! $counterId) {
            return $this->sendError(['msg' => 'No has indicado el contador que incrementar']);
        }

        $counter = Counter::find($counterId);
        if(! $counter ) {
            return $this->sendError(['msg' => 'No he encontrado el contador relacionado con tu consulta']);
        }

        $counter->counter++;
        $counter->save();
        return $this->sendSuccess(['counter' => $counter->counter]);
    }
}
