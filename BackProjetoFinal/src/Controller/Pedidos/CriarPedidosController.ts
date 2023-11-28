import { Request,Response } from "express";
import { CriarPedidoServer } from "../../Services/Pedidos/CriarPedidoServer";


class CriarPedidosController{
    async handle(req:Request, res:Response){

        const{numero_do_pedido,UsuarioId} =req.body
      // console.log("cont:",numero_do_pedido,,UsuarioId)

        const criarPedidosController = new CriarPedidoServer()
        const CriarPedido = await  criarPedidosController.execute({
            numero_do_pedido,UsuarioId
        })
        //console.log(CriarPedido)
         return res.json(CriarPedido)
    }


}
export{CriarPedidosController}