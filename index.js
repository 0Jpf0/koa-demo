const Koa=require('koa');
const Router=require('koa-router');
const Body=require('koa-body');
const app=new Koa();
const router=new Router();
app.use(Body());
router.prefix('/api')
router.post('/user',ctx=>{
    let name=ctx.request.body.name;
    let email=ctx.request.body.email;
    ctx.body=ctx.header.hasOwnProperty('role')&&ctx.header.role==='admin'?name&&email?{
        code:200,
        data:ctx.request.body,
        msg:"上传成功"
    }:{
        code:404,
        msg:"name与email不得为空"
    }:{
        code:401,
        msg:"unauthorized post"
    }
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);