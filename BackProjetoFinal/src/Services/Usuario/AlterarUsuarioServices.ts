import prismaClient from "../../prisma";

interface AlterarUsuario{
    id:string
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
  
}

class AlterarUsuarioServices{
   async execute({id,nome, email , cpf_cnpj, rg_Ie, celular, fixo, rua, complemento ,cep,bairro,cidade, estado}:AlterarUsuario){

    await prismaClient.usuario.update({
        where:{
            id:id,
        },
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

        }     
      
    })
    return {dados:"Usuario Alterado"}
    
   }
}
export{AlterarUsuarioServices}