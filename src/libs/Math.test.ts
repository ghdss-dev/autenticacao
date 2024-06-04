import {Math} from './Math';

describe('Testing Math library', () => {

    beforeEach(() => {


    })

    afterEach(() => {


    })

    beforeAll(() => {

    })

    afterAll(() => {

        
    })

    it('should sum two numbers correctly', () => {

        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    }); 
    
    it('should subtract two numbers correctly', () => {
    
        const response = Math.sub(4,2);
        expect(response).toBe(2);
    }); 
    
    it('should multiply two numbers correctly', () => {
    
        const response = Math.mut(3,5);
        expect(response).toBe(15);
    
        const response2 = Math.mut(0,3);
        expect(response2).toBe(0);
    }); 
    
    it('should divide two numbers correctly', () => {
    
        const response = Math.div(15, 5);
        expect(response).toBe(3);
    
        const response2 = Math.div(3,0);
        expect(response2).toBe(false);
    }); 

    it.only('contar quantos caracteres tem na string', () => {

        const response = 'Gustavo'; 
        expect(response).toHaveLength(7);
    });

    it.only('se possui a propriedade EMAIL', () => {

        const response ={

            name: 'Gustavo', 
            email: 'ghdss_ti@hotmail.com'
        }

        expect(response).toHaveProperty('email');
        expect(response).toThrow(new Error('Não mostra o nome')); 
       
    });
})




