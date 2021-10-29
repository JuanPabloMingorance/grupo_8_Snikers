module.exports=(sequelize,dataTypes)=>{
    let alias='Category';
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

    }
let config= {
    tableName:'categories',
    timestanps:false,

}
const Category=sequelize(alias,cols,config)

Category.associate=models=>{
    Category.hasMany(models.Product,{
        as:'productos',
        foreignKey:'categoria_id'
    
    })
}
return Category
}