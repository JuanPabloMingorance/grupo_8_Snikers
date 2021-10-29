module.exports=(sequelize,dataTypes)=>{
    let alias='Section';
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
    tableName:'sections',
    timestanps:false,

}
const Section=sequelize(alias,cols,config)

Section.associate=models=>{
    Section.hasMany(models.Product,{
        as:'productos',
        foreignKey:'seccion_id'
    
    })
}
return Section
}