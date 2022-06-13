
export class QuadraticEquation {
    private _a: number;
    private _b: number;
    private _c: number;
    private delta: number;
    private _x : any[];

    constructor (a: number,b: number,c: number, delta: number = 0, x: any[] = []){
        this._a = a;
        this._b = b;
        this._c = c;
        this._x = x;        
    }
    
    getDiscriminant() : any[] {      
       this.delta  = Math.pow(this._b,2) - 4*this._a*this._c
       if(this.delta === 0){
            this._x = [-this._b/2*this._a]
       } else if (this.delta > 0){
            this._x= [(-this._b + Math.sqrt(this.delta))/2*this._a, 
            (-this._b - Math.sqrt(this.delta))/2*this._a]
       } else {
           return this._x = ["Phuong trinh vo nghiem"];
       }
       return this._x;
    }
}

