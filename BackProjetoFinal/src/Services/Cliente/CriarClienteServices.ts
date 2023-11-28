import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'


interface CriarCliente{
    nome  :      string
    email :      string
    cpf_cnpj:    string
    rg_Ie:       string
    celular:     string
    fixo:        string
    rua:         string
    complemento: string
    cep:         string
    bairro:      string
    cidade :     string
    estado:      string
    password:    string
}

class CriarClienteServices{
   async execute({nome, email , cpf_cnpj, rg_Ie, celular, fixo, rua, complemento ,cep,bairro,cidade, estado, password}:CriarCliente){

    if (!nome ||! email ||!cpf_cnpj || !rg_Ie || !celular|| !fixo || !rua ||!complemento || !cep || !bairro|| !cidade ||! estado ||!password) {

        throw new Error("Preencha os campos vasio")        
    }
      const criarCliente = await prismaClient.cliente.findFirst({
        where:{
            OR:[
              {
                  cpf_cnpj:cpf_cnpj
              },
              {
                  rg_Ie:rg_Ie
              },{
                email:email
              }

            ]}
            
        })
        
        if (criarCliente) {
            throw new Error('CPF/CNPJ - RG/IE já esta cadastrado')
    }
    const senhaCrypt = await hash(password, 8)
        await prismaClient.cliente.create({
            data:{
                nome :  nome, 
                email :  email, 
                cpf_cnpj: cpf_cnpj,
                rg_Ie:  rg_Ie,       
                celular: celular,  
                fixo:    fixo,        
                rua:      rua,  
                complemento:complemento,
                cep: cep,
                bairro: bairro,
                cidade :    cidade ,    
                estado:    estado,  
                senha: senhaCrypt 

            },select:{
                nome :  true, 
                email :true, 
                cpf_cnpj:true,
                rg_Ie:  true,       
                celular: true,  
                fixo:    true,        
                rua:      true,  
                complemento: true,
                cep: true,
                bairro: true,
                cidade :    true ,    
                estado:    true,  
                 
            }
        })
        return {dados:"cliente salvo com sucesso"}
   }

}
export{CriarClienteServices}