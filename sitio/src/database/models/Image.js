module.exports=(sequelize,dataTypes)=>{
    let alias='Image';
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        file: {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        product_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
    }
let config= {
    tableName:'images',
    timestamps:false,

}
const Image=sequelize.define(alias,cols,config)

Image.associate=models=>{
    Image.belongsTo(models.Product,{
        as:'producto',
        foreignKey:'product_id'
    
    })
}
return Image
}