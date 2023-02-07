import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

    constructor() { }

    handleError(error)
    {
        let errorMessage = '';
        if(error.error.message)
        {
            errorMessage = error.error.message;
        }else{
            errorMessage = 'There is some Unknown Error. Please Try again After Some Time.'
        }
        return throwError(errorMessage);
    }
}
