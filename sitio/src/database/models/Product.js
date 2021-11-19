module.exports=(sequelize,dataTypes)=>{
    let alias='Product';
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre: {
            type:dataTypes.STRING(100),
            allowNull:false
        },

        precio: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        marca_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        descripcion: {
            type:dataTypes.STRING(500),
            allowNull:false
        },
        stock: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        categoria_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        seccion_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        }

    }
let config= {
    tableName:'products',
    timestamps:false,

}
const Product=sequelize.define(alias,cols,config)

Product.associate=models=>{
    Product.belongsTo(models.Brand,{
        as:'marca',
        foreignKey:'marca_id'
    
    })

    Product.belongsTo(models.Section,{
        as:'seccion',
        foreignKey:'seccion_id'
    
    })
    Product.belongsTo(models.Category,{
        as:'categoria',
        foreignKey:'categoria_id'
    
    })
    Product.hasMany(models.Image,{
        as:'imagenes',
        foreignKey:'product_id'
    
    })
    Product.belongsToMany(models.User,{
        as:'usuarios',
        through:'cart_shop',
        foreignKey:'product_id',
        otherKey:'user_id',
        timestamps:false,
    })
}
return Product
}