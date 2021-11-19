module.exports=(sequelize,dataTypes)=>{
    let alias='Cart';
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        product_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        quantity: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
    }
let config= {
    tableName:'cart_shop',
    timestamps:false,

}
const Cart=sequelize.define(alias,cols,config)


return Cart
}