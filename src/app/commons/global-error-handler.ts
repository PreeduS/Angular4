import { ErrorHandler } from '@angular/core';


export class GlobalErrorHandler implements ErrorHandler {
    handleError(error) {
        //throw new Error("Method not implemented.");
        console.log('GlobalErrorHandler: ',error)
    }
}

/*
added in providers:
    {
        provide : ErrorHandler,
        useClass : GlobalErrorHandler
    }
*/