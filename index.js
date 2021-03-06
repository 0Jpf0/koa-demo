const Koa=require('koa');
const Router=require('koa-router');
const Body=require('koa-body');
const cors=require('@koa/cors');
const app=new Koa();
const router=new Router();
router.prefix('/api')
router.post('/user',ctx=>{
    let name=ctx.request.body.name;
    let email=ctx.request.body.email;
    if(ctx.header.hasOwnProperty('role')&&ctx.header.role==='admin'){
        if(name&&email){
            ctx.body={
                code:200,
                data:ctx.request.body,
                msg:"上传成功"
            }
        }else{
            ctx.body={
                code:404,
                msg:"name与email不得为空"
            }
        }
    }else{
        ctx.body={
            code:401,
                msg:"unauthorized post"
        }
    }
});
app.use(Body());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);