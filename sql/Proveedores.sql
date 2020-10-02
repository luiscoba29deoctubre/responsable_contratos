
/*==============================================================*/
/* Table: TACEPTACION                                           */
/*==============================================================*/
create table Proveedores.TACEPTACION (
   ID                   int                  identity,
   DECLARACION          varchar(2000)        null,
   AUTORIZACION         varchar(2000)        null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   FECHAREGISTRO        date                 null,
   constraint PK_TACEPTACION primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TACEPTACION') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TACEPTACION' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'se almacena el texto que se muestra al proveedor que esta aceptando las condiciones dadas', 
   'user', @CurrentUser, 'table', 'Proveedores.TACEPTACION'
go

/*==============================================================*/
/* Table: TACEPTACIONHISTORICO                                  */
/*==============================================================*/
create table Proveedores.TACEPTACIONHISTORICO (
   ID                   int                  identity,
   DECLARACION          varchar(2000)        null,
   AUTORIZACION         varchar(2000)        null,
   FECHAREGISTRO        date                 null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TACEPTACIONHISTORICO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TACEPTACIONHISTORICO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TACEPTACIONHISTORICO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'es la tabla historica de la tabla aceptacion', 
   'user', @CurrentUser, 'table', 'Proveedores.Proveedores.TACEPTACIONHISTORICO'
go

/*==============================================================*/
/* Table: TACTIVIDAD                                            */
/*==============================================================*/
create table Proveedores.TACTIVIDAD (
   ID                   int                  identity,
   NOMBRE               varchar(100)         null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TACTIVIDAD primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TACTIVIDAD') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TACTIVIDAD' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de actividades, bienes o servicios', 
   'user', @CurrentUser, 'table', 'Proveedores.TACTIVIDAD'
go

/*==============================================================*/
/* Table: TCALIFICABURO                                         */
/*==============================================================*/
create table Proveedores.TCALIFICABURO (
   ID                   int                  identity,
   INDICE               int                  null,
   COLOR                varchar(20)          null,
   PORCENTAJE           int                  null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCALIFICABURO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCALIFICABURO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCALIFICABURO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'ponderación del burò de crèdito', 
   'user', @CurrentUser, 'table', 'Proveedores.TCALIFICABURO'
go

/*==============================================================*/
/* Table: TCALIFICACION                                         */
/*==============================================================*/
create table Proveedores.TCALIFICACION (
   ID                   int                  identity,
   RANGO                int                  null,
   CALIFICACION         varchar(20)          null,
   RIESGO               varchar(20)          null,
   RESULTADO            varchar(100)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCALIFICACION primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCALIFICACION') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCALIFICACION' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena el detalle para calificar a los proveedores', 
   'user', @CurrentUser, 'table', 'Proveedores.TCALIFICACION'
go

/*==============================================================*/
/* Table: TCANTON                                               */
/*==============================================================*/
create table Proveedores.TCANTON (
   ID                   int                  identity,
   IDPROVINCIA          int                  null,
   NOMBRE               varchar(50)          null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCANTON primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCANTON') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCANTON' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de cantones', 
   'user', @CurrentUser, 'table', 'Proveedores.TCANTON'
go

/*==============================================================*/
/* Table: TCATALOGOCATEGORIA                                    */
/*==============================================================*/
create table Proveedores.TCATALOGOCATEGORIA (
   ID                   int                  identity,
   IDCATEGORIA          int                  null,
   NOMBRE               varchar(200)         null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCATALOGOCATEGORIA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCATALOGOCATEGORIA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCATALOGOCATEGORIA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de catalogos que le corresponde a cada categoria', 
   'user', @CurrentUser, 'table', 'Proveedores.TCATALOGOCATEGORIA'
go

/*==============================================================*/
/* Table: TCATEGORIA                                            */
/*==============================================================*/
create table Proveedores.TCATEGORIA (
   ID                   int                  identity,
   IDACTIVIDAD          int                  null,
   NOMBRE               varchar(100)         null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCATEGORIA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCATEGORIA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCATEGORIA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de categorias que le corresponde a cada actividad', 
   'user', @CurrentUser, 'table', 'Proveedores.TCATEGORIA'
go

/*==============================================================*/
/* Table: TCUENTA                                               */
/*==============================================================*/
create table Proveedores.TCUENTA (
   ID                   int                  identity,
   NOMBRE               varchar(20)          null,
   CODIGO               varchar(10)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCUENTA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCUENTA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCUENTA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Esta tabla tiene la lista de todas las cuentas contables', 
   'user', @CurrentUser, 'table', 'Proveedores.TCUENTA'
go

/*==============================================================*/
/* Table: TCUENTAPERFILFINANCIERO                               */
/*==============================================================*/
create table Proveedores.TCUENTAPERFILFINANCIERO (
   ID                   int                  identity,
   IDCUENTA             int                  null,
   IDPERFILFINANCIERO   int                  null,
   RESULTADOANIOPENULTIMO numeric(10, 2)       null,
   RESULTADOANIOULTIMO  numeric(10, 2)       null,
   CALCULOANIOPENULTIMO numeric(10, 2)       null,
   CALCULOANIOULTIMO    numeric(10, 2)       null,
   PESO                 numeric(3,2)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TCUENTAPERFILFINANCIERO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TCUENTAPERFILFINANCIERO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TCUENTAPERFILFINANCIERO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Esta es una tabla de rompimiento, de la relación varios a varios', 
   'user', @CurrentUser, 'table', 'Proveedores.TCUENTAPERFILFINANCIERO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TCUENTAPERFILFINANCIERO')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'IDPERFILFINANCIERO')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TCUENTAPERFILFINANCIERO', 'column', 'IDPERFILFINANCIERO'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Es el id',
   'user', @CurrentUser, 'table', 'Proveedores.TCUENTAPERFILFINANCIERO', 'column', 'IDPERFILFINANCIERO'
go

/*==============================================================*/
/* Table: TDOCUMENTO                                            */
/*==============================================================*/
create table Proveedores.TDOCUMENTO (
   ID                   int                  identity,
   NOMBRE               varchar(150)         null,
   NUMERO               int                  null,
   PESO                 numeric(3,2)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TDOCUMENTO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TDOCUMENTO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de documentos', 
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TDOCUMENTO')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'NUMERO')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTO', 'column', 'NUMERO'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'es el numero de archivos que debe de subir',
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTO', 'column', 'NUMERO'
go

/*==============================================================*/
/* Table: TDOCUMENTOPERFILDOCUMENTAL                            */
/*==============================================================*/
create table Proveedores.TDOCUMENTOPERFILDOCUMENTAL (
   ID                   int                  identity,
   IDPERFILDOCUMENTAL   int                  null,
   IDDOCUMENTO          int                  null,
   NOMBRE               varchar(150)         null,
   TAMANIO              int                  null,
   RUTA                 varchar(900)         null,
   FECHAREGISTRO        date                 null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TDOCUMENTOPERFILDOCUMENTAL primary key nonclustered (ID)
)
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TDOCUMENTOPERFILDOCUMENTAL')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'NOMBRE')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTOPERFILDOCUMENTAL', 'column', 'NOMBRE'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'es el nombre del archivo que ha sido subido',
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTOPERFILDOCUMENTAL', 'column', 'NOMBRE'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TDOCUMENTOPERFILDOCUMENTAL')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TAMANIO')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTOPERFILDOCUMENTAL', 'column', 'TAMANIO'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'es el tamanio del archivo en kb',
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTOPERFILDOCUMENTAL', 'column', 'TAMANIO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TDOCUMENTOPERFILDOCUMENTAL')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'RUTA')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTOPERFILDOCUMENTAL', 'column', 'RUTA'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'es el directorio donde se almacena el archivo',
   'user', @CurrentUser, 'table', 'Proveedores.TDOCUMENTOPERFILDOCUMENTAL', 'column', 'RUTA'
go

/*==============================================================*/
/* Table: TENCABEZADO                                           */
/*==============================================================*/
create table Proveedores.TENCABEZADO (
   ID                   int                  identity,
   IDUSUARIOSISTEMA     int                  null,
   FPEDIDOCALIFICACION  date                 null,
   FRECEPCIONDOCUMENTACION date                 null,
   FENTREGADOCUMENTACIONCOMPLETA date                 null,
   DOCUMENTACIONENTREGADA bit                  null,
   OBSERVACION          varchar(1000)        null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TENCABEZADO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TENCABEZADO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TENCABEZADO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Este espacio inicial del formulario es para uso exclusivo de la Cooperativa, es decir, son campos que deben ser llenados por la persona responsable del proceso, una vez que el proveedor envía lleno el formulario integralmente este campo queda para exclusividad del responsable ', 
   'user', @CurrentUser, 'table', 'Proveedores.TENCABEZADO'
go

/*==============================================================*/
/* Table: TFORMULARATIO                                         */
/*==============================================================*/
create table Proveedores.TFORMULARATIO (
   ID                   int                  identity,
   IDTIPORATIO          int                  null,
   NOMBRE               varchar(150)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TFORMULARATIO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TFORMULARATIO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TFORMULARATIO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Aqui se almacena cada una de las formulas de los ratios con sus respectivas cuentas, El formato es c(idCuenta), el cálculo lo realiza SqlServer', 
   'user', @CurrentUser, 'table', 'Proveedores.TFORMULARATIO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TFORMULARATIO')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'NOMBRE')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TFORMULARATIO', 'column', 'NOMBRE'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Aquí va la formula que se aplicará para el cálculo de los ratios. Se calcula con el id de cuenta',
   'user', @CurrentUser, 'table', 'Proveedores.TFORMULARATIO', 'column', 'NOMBRE'
go

/*==============================================================*/
/* Table: TIDENTIFICACIONPROVEEDOR                              */
/*==============================================================*/
create table Proveedores.TIDENTIFICACIONPROVEEDOR (
   ID                   int                  identity,
   IDTIPOPROVEEDOR      int                  null,
   IDTIPOCONTRIBUYENTE  int                  null,
   RUCRISE              varchar(15)          null,
   NOMBRERAZONSOCIAL    varchar(100)         null,
   NOMBRECOMERCIAL      varchar(100)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TIDENTIFICACIONPROVEEDOR primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TIDENTIFICACIONPROVEEDOR') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TIDENTIFICACIONPROVEEDOR' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'el proveedor debe ingresar información general, giro de negocio, naturaleza, tipo de contribuyente y actividad económica para la cual se va a calificar con la Cooperativa.', 
   'user', @CurrentUser, 'table', 'Proveedores.TIDENTIFICACIONPROVEEDOR'
go

/*==============================================================*/
/* Table: TINFORMACIONCONTACTO                                  */
/*==============================================================*/
create table Proveedores.TINFORMACIONCONTACTO (
   ID                   int                  identity,
   IDPARROQUIA          int                  null,
   DIRECCION            varchar(200)         null,
   TELEFONO             varchar(15)          null,
   CELULAR              varchar(15)          null,
   MAILPROVEEDOR        varchar(50)          null,
   CONTACTOCOMERCIAL    varchar(50)          null,
   TELEFONOCONTACTOCOMERCIAL varchar(15)          null,
   CELULAR1             varchar(15)          null,
   MAIL1                varchar(15)          null,
   CELULAR2             varchar(15)          null,
   MAIL2                varchar(15)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TINFORMACIONCONTACTO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TINFORMACIONCONTACTO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TINFORMACIONCONTACTO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'se debe ingresar información de contacto del proveedor y de su asesor o ejecutivo comercial que estará al frente de las relaciones comerciales con la Cooperativa', 
   'user', @CurrentUser, 'table', 'Proveedores.TINFORMACIONCONTACTO'
go

/*==============================================================*/
/* Table: TLOG                                                  */
/*==============================================================*/
create table Proveedores.TLOG (
   ID                   int                  identity,
   FECHAREGISTRO        datetime             null,
   FECHAFINAL           datetime             null,
   APLICACION           varchar(20)          null,
   SERVICIOWEB          varchar(50)          null,
   MENSAJE              varchar(2000)        null,
   CORRELACION          varchar(100)         null,
   RESPONSABLE          varchar(30)          null,
   constraint PK_TLOG primary key (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TLOG') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TLOG' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Aqui se almacena el registro de procesos de la base de datos', 
   'user', @CurrentUser, 'table', 'Proveedores.TLOG'
go

/*==============================================================*/
/* Table: TMENU                                                 */
/*==============================================================*/
create table Proveedores.TMENU (
   ID                   int                  identity,
   NOMBRE               varchar(20)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TMENU primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TMENU') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TMENU' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'se almacena los nombres de las pantallas del sistema', 
   'user', @CurrentUser, 'table', 'Proveedores.TMENU'
go

/*==============================================================*/
/* Table: TMENUPERFIL                                           */
/*==============================================================*/
create table Proveedores.TMENUPERFIL (
   ID                   int                  identity,
   IDMENU               int                  null,
   TPERFILSISTEMA       int                  null,
   constraint PK_TMENUPERFIL primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TMENUPERFIL') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TMENUPERFIL' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacena los menus y perfiles, para saber que pantallas le corresponden a determinado perfil', 
   'user', @CurrentUser, 'table', 'Proveedores.TMENUPERFIL'
go

/*==============================================================*/
/* Table: TPAIS                                                 */
/*==============================================================*/
create table Proveedores.TPAIS (
   ID                   int                  identity,
   NOMBRE               varchar(30)          null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPAIS primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPAIS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPAIS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de paises', 
   'user', @CurrentUser, 'table', 'Proveedores.TPAIS'
go

/*==============================================================*/
/* Table: TPARROQUIA                                            */
/*==============================================================*/
create table Proveedores.TPARROQUIA (
   ID                   int                  identity,
   IDCANTON             int                  null,
   NOMBRE               varchar(40)          null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPARROQUIA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPARROQUIA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPARROQUIA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de parroquias', 
   'user', @CurrentUser, 'table', 'Proveedores.TPARROQUIA'
go

/*==============================================================*/
/* Table: TPERFILDOCUMENTAL                                     */
/*==============================================================*/
create table Proveedores.TPERFILDOCUMENTAL (
   ID                   int                  identity,
   IDACEPTACION         int                  null,
   NUMERODOCUMENTOSENTREGADOS int                  null,
   RUTAFIRMARESPALDO    varchar(600)         null,
   FECHAREGISTRO        date                 null,
   PESO                 numeric(3,2)         null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPERFILDOCUMENTAL primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPERFILDOCUMENTAL') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILDOCUMENTAL' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'documental se solicita al proveedor ciertos documentos, se registra cuantos documentos entrea, la fecha de entrega y la ruta donde almacenamos el documento firmado', 
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILDOCUMENTAL'
go

/*==============================================================*/
/* Table: TPERFILEMPRESARIAL                                    */
/*==============================================================*/
create table Proveedores.TPERFILEMPRESARIAL (
   ID                   int                  identity,
   FECHAAPERTURARUC     date                 null,
   ACTIVIDADECONOMICAPRINCIPAL varchar(200)         null,
   ACTIVIDADECONOMICASECUNDARIA varchar(200)         null,
   PESO                 numeric(3,2)         null,
   FECHAREGISTRO        date                 null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPERFILEMPRESARIAL primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPERFILEMPRESARIAL') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILEMPRESARIAL' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'existen inicialmente 3 campos para completar información del proveedor', 
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILEMPRESARIAL'
go

/*==============================================================*/
/* Table: TPERFILFINANCIERO                                     */
/*==============================================================*/
create table Proveedores.TPERFILFINANCIERO (
   ID                   int                  identity,
   IDTIPOPERSONA        int                  null,
   PESO                 numeric(3,2)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPERFILFINANCIERO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPERFILFINANCIERO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILFINANCIERO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'se debe inicialmente definir si el proveedor es persona natural o jurídica', 
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILFINANCIERO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TPERFILFINANCIERO')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILFINANCIERO', 'column', 'ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Es el id',
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILFINANCIERO', 'column', 'ID'
go

/*==============================================================*/
/* Table: TPERFILSISTEMA                                        */
/*==============================================================*/
create table Proveedores.TPERFILSISTEMA (
   ID                   int                  identity,
   CODIGO               int                  null,
   NOMBRE               varchar(20)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPERFILSISTEMA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPERFILSISTEMA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILSISTEMA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'se almacena los perfiles de usuario del sistema', 
   'user', @CurrentUser, 'table', 'Proveedores.TPERFILSISTEMA'
go

/*==============================================================*/
/* Table: TPREGUNTA                                             */
/*==============================================================*/
create table Proveedores.TPREGUNTA (
   ID                   int                  identity,
   IDTIPOPERFIL         int                  null,
   NOMBRE               varchar(600)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPREGUNTA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPREGUNTA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPREGUNTA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacenan cada una de las preguntas que se hacen en el cuestionario', 
   'user', @CurrentUser, 'table', 'Proveedores.TPREGUNTA'
go

/*==============================================================*/
/* Table: TPROVEEDOR                                            */
/*==============================================================*/
create table Proveedores.TPROVEEDOR (
   ID                   int                  identity,
   IDUSUARIOSISTEMA     int                  null,
   IDENCABEZADO         int                  null,
   IDPERFILEMPRESARIAL  int                  null,
   IDPERFILFINANCIERO   int                  null,
   IDIDENTIFICACIONPROVEEDOR int                  null,
   IDCALIFICACION       int                  null,
   IDCALIFICABURO       int                  null,
   IDINFORMACIONCONTACTO int                  null,
   IDPERFILDOCUMENTAL   int                  null,
   PESOTOTAL            numeric(3,2)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPROVEEDOR primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPROVEEDOR') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPROVEEDOR' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Es la principal tabla que almacenará los ids de toda la informacion del proveedor', 
   'user', @CurrentUser, 'table', 'Proveedores.TPROVEEDOR'
go

/*==============================================================*/
/* Table: TPROVEEDORACTIVIDAD                                   */
/*==============================================================*/
create table Proveedores.TPROVEEDORACTIVIDAD (
   ID                   int                  identity,
   IDIDENTIFICACIONPROVEEDOR int                  null,
   IDCATALOGOCATEGORIA  int                  null,
   ESTADO               bit                  null,
   constraint PK_TPROVEEDORACTIVIDAD primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPROVEEDORACTIVIDAD') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPROVEEDORACTIVIDAD' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacena las actividades que le corresponde a los proveedores', 
   'user', @CurrentUser, 'table', 'Proveedores.TPROVEEDORACTIVIDAD'
go

/*==============================================================*/
/* Table: TPROVINCIA                                            */
/*==============================================================*/
create table Proveedores.TPROVINCIA (
   ID                   int                  identity,
   IDPAIS               int                  null,
   NOMBRE               varchar(40)          null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TPROVINCIA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TPROVINCIA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TPROVINCIA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'almacena la lista de las provincias', 
   'user', @CurrentUser, 'table', 'Proveedores.TPROVINCIA'
go

/*==============================================================*/
/* Table: TRATIOFINANCIERO                                      */
/*==============================================================*/
create table Proveedores.TRATIOFINANCIERO (
   ID                   int                  identity,
   IDTIPORATIO          int                  null,
   PORCENTAJE           numeric(2,2)         null,
   RATIO                numeric(6,2)         null,
   ANIOACTUAL           varchar(4)           null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   ESTADO               bit                  null,
   constraint PK_TRATIOFINANCIERO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TRATIOFINANCIERO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TRATIOFINANCIERO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Aqui se almacenan los los porcentajes que le corresponde a cada ratio para posteriormente obtener el puntaje del perfil financiero', 
   'user', @CurrentUser, 'table', 'Proveedores.TRATIOFINANCIERO'
go

/*==============================================================*/
/* Table: TRATIOFINANCIEROHISTORICO                             */
/*==============================================================*/
create table Proveedores.TRATIOFINANCIEROHISTORICO (
   ID                   int                  identity,
   IDRATIOFINANCIERO    int                  null,
   ANIOACTUAL           int                  null,
   PORCENTAJE           numeric(2,2)         null,
   RATIO                numeric(6,2)         null,
   FECHAREGISTRO        date                 null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TRATIOFINANCIEROHISTORICO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TRATIOFINANCIEROHISTORICO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TRATIOFINANCIEROHISTORICO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Esta tabla es el historial de la tabla tratiofinanciero', 
   'user', @CurrentUser, 'table', 'Proveedores.TRATIOFINANCIEROHISTORICO'
go

/*==============================================================*/
/* Table: TRESPUESTA                                            */
/*==============================================================*/
create table Proveedores.TRESPUESTA (
   ID                   int                  identity,
   IDPREGUNTA           int                  null,
   NOMBRE               varchar(100)         null,
   PESO                 dec(3,2)             null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TRESPUESTA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TRESPUESTA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TRESPUESTA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacenan las respuestas de las preguntas realizadas', 
   'user', @CurrentUser, 'table', 'Proveedores.TRESPUESTA'
go

/*==============================================================*/
/* Table: TRESPUESTASELECCIONADA                                */
/*==============================================================*/
create table Proveedores.TRESPUESTASELECCIONADA (
   ID                   int                  identity,
   IDRESPUESTA          int                  null,
   IDPROVEEDOR          int                  null,
   IDTIPOPERFIL         int                  null,
   FECHAREGISTRO        date                 null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TRESPUESTASELECCIONADA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TRESPUESTASELECCIONADA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TRESPUESTASELECCIONADA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Esta tabla almacena las respuestas seleccionadas de cada proveedor', 
   'user', @CurrentUser, 'table', 'Proveedores.TRESPUESTASELECCIONADA'
go

/*==============================================================*/
/* Table: TTIPOCONTRIBUYENTE                                    */
/*==============================================================*/
create table Proveedores.TTIPOCONTRIBUYENTE (
   ID                   int                  identity,
   IDTIPOPERSONA        int                  null,
   NOMBRE               varchar(100)         null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TTIPOCONTRIBUYENTE primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TTIPOCONTRIBUYENTE') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOCONTRIBUYENTE' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Se almacena los tipos de contribuyentes', 
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOCONTRIBUYENTE'
go

/*==============================================================*/
/* Table: TTIPOPERFIL                                           */
/*==============================================================*/
create table Proveedores.TTIPOPERFIL (
   ID                   int                  identity,
   NOMBRE               varchar(25)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TTIPOPERFIL primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TTIPOPERFIL') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOPERFIL' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacenan los tipos de perfiles que se pueden ingresar:
   
   - Perfil empresarial
   - Perfil financiero
   - Perfil operativo
   - Perfil comercial
   - Perfil documental
   ', 
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOPERFIL'
go

/*==============================================================*/
/* Table: TTIPOPERSONA                                          */
/*==============================================================*/
create table Proveedores.TTIPOPERSONA (
   ID                   int                  identity,
   NOMBRE               varchar(20)          null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TTIPOPERSONA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TTIPOPERSONA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOPERSONA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Se almacena los tipos de personas', 
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOPERSONA'
go

/*==============================================================*/
/* Table: TTIPOPROVEEDOR                                        */
/*==============================================================*/
create table Proveedores.TTIPOPROVEEDOR (
   ID                   int                  identity,
   NOMBRE               varchar(20)          null,
   CODIGO               varchar(50)          null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TTIPOPROVEEDOR primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TTIPOPROVEEDOR') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOPROVEEDOR' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Aqui se guarda si es nacional o extranjero', 
   'user', @CurrentUser, 'table', 'Proveedores.TTIPOPROVEEDOR'
go

/*==============================================================*/
/* Table: TTIPORATIO                                            */
/*==============================================================*/
create table Proveedores.TTIPORATIO (
   ID                   int                  identity,
   IDTIPOPERSONA        int                  null,
   NOMBRE               varchar(150)         null,
   ESTADO               bit                  null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   VALOROPTIMO          varchar(150)         null,
   constraint PK_TTIPORATIO primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TTIPORATIO') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TTIPORATIO' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui almacenamos la lista de ratios', 
   'user', @CurrentUser, 'table', 'Proveedores.TTIPORATIO'
go

/*==============================================================*/
/* Table: TTIPORATIOCUENTA                                      */
/*==============================================================*/
create table Proveedores.TTIPORATIOCUENTA (
   ID                   int                  identity,
   IDTIPORATIO          int                  null,
   IDCUENTA             int                  null,
   constraint PK_TTIPORATIOCUENTA primary key nonclustered (ID)
)
go

/*==============================================================*/
/* Table: TUSUARIOPERFILSISTEMA                                 */
/*==============================================================*/
create table Proveedores.TUSUARIOPERFILSISTEMA (
   ID                   int                  identity,
   IDUSUARIOSISTEMA     int                  null,
   IDPERFILSISTEMA      int                  null,
   FECHAREGISTRO        date                 null,
   ESTADO               bit                  null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TUSUARIOPERFILSISTEMA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TUSUARIOPERFILSISTEMA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TUSUARIOPERFILSISTEMA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacenan los perfiles que puede tener cada usuario', 
   'user', @CurrentUser, 'table', 'Proveedores.TUSUARIOPERFILSISTEMA'
go

/*==============================================================*/
/* Table: TUSUARIOSISTEMA                                       */
/*==============================================================*/
create table Proveedores.TUSUARIOSISTEMA (
   ID                   int                  identity,
   USUARIO              varchar(20)          null,
   NOMBRE               varchar(20)          null,
   APELLIDOS            varchar(40)          null,
   CLAVE                varchar(100)         null,
   CLAVETEMPORAL        varchar(100)         null,
   FECHACADUCACLAVETEMP datetime             null,
   CORREO               varchar(40)          null,
   TELEFONO             varchar(15)          null,
   ESTADO               varchar(15)          null,
   FECHAREGISTRO        date                 null,
   RESPONSABLE          varchar(50)          null,
   constraint PK_TUSUARIOSISTEMA primary key nonclustered (ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('Proveedores.TUSUARIOSISTEMA') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'Proveedores.TUSUARIOSISTEMA' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'aqui se almacenan los usuarios del sistema', 
   'user', @CurrentUser, 'table', 'Proveedores.TUSUARIOSISTEMA'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('Proveedores.TUSUARIOSISTEMA')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CLAVE')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'Proveedores.TUSUARIOSISTEMA', 'column', 'CLAVE'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'la generacion de claves es encriptada por ese debe tener mucha longitud la clave',
   'user', @CurrentUser, 'table', 'Proveedores.TUSUARIOSISTEMA', 'column', 'CLAVE'
go

alter table Proveedores.TCANTON
   add constraint FK_TCANTON_REFERENCE_TPROVINC foreign key (IDPROVINCIA)
      references Proveedores.TPROVINCIA (ID)
go

alter table Proveedores.TCATALOGOCATEGORIA
   add constraint FK_TCATALOG_REFERENCE_TCATEGOR foreign key (IDCATEGORIA)
      references Proveedores.TCATEGORIA (ID)
go

alter table Proveedores.TCATEGORIA
   add constraint FK_TCATEGOR_REFERENCE_TACTIVID foreign key (IDACTIVIDAD)
      references Proveedores.TACTIVIDAD (ID)
go

alter table Proveedores.TCUENTAPERFILFINANCIERO
   add constraint FK_TCUENTAP_REFERENCE_TCUENTA foreign key (IDCUENTA)
      references Proveedores.TCUENTA (ID)
go

alter table Proveedores.TCUENTAPERFILFINANCIERO
   add constraint FK_TCUENTAP_REFERENCE_TPERFILF foreign key (IDPERFILFINANCIERO)
      references Proveedores.TPERFILFINANCIERO (ID)
go

alter table Proveedores.TDOCUMENTOPERFILDOCUMENTAL
   add constraint FK_TDOCUMEN_REFERENCE_TPERFILD foreign key (IDPERFILDOCUMENTAL)
      references Proveedores.TPERFILDOCUMENTAL (ID)
go

alter table Proveedores.TDOCUMENTOPERFILDOCUMENTAL
   add constraint FK_TDOCUMEN_REFERENCE_TDOCUMEN foreign key (IDDOCUMENTO)
      references Proveedores.TDOCUMENTO (ID)
go

alter table Proveedores.TENCABEZADO
   add constraint FK_TENCABEZ_REFERENCE_TUSUARIO foreign key (IDUSUARIOSISTEMA)
      references Proveedores.TUSUARIOSISTEMA (ID)
go

alter table Proveedores.TFORMULARATIO
   add constraint FK_TFORMULA_REFERENCE_TTIPORAT foreign key (IDTIPORATIO)
      references Proveedores.TTIPORATIO (ID)
go

alter table Proveedores.TIDENTIFICACIONPROVEEDOR
   add constraint FK_TIDENTIF_REFERENCE_TTIPOPRO foreign key (IDTIPOPROVEEDOR)
      references Proveedores.TTIPOPROVEEDOR (ID)
go

alter table Proveedores.TIDENTIFICACIONPROVEEDOR
   add constraint FK_TIDENTIF_REFERENCE_TTIPOCON foreign key (IDTIPOCONTRIBUYENTE)
      references Proveedores.TTIPOCONTRIBUYENTE (ID)
go

alter table Proveedores.TINFORMACIONCONTACTO
   add constraint FK_TINFORMA_REFERENCE_TPARROQU foreign key (IDPARROQUIA)
      references Proveedores.TPARROQUIA (ID)
go

alter table Proveedores.TMENUPERFIL
   add constraint FK_TMENUPER_REFERENCE_TMENU foreign key (IDMENU)
      references Proveedores.TMENU (ID)
go

alter table Proveedores.TMENUPERFIL
   add constraint FK_TMENUPER_REFERENCE_TPERFILS foreign key (TPERFILSISTEMA)
      references Proveedores.TPERFILSISTEMA (ID)
go

alter table Proveedores.TPARROQUIA
   add constraint FK_TPARROQU_REFERENCE_TCANTON foreign key (IDCANTON)
      references Proveedores.TCANTON (ID)
go

alter table Proveedores.TPERFILDOCUMENTAL
   add constraint FK_TPERFILD_REFERENCE_TACEPTAC foreign key (IDACEPTACION)
      references Proveedores.TACEPTACION (ID)
go

alter table Proveedores.TPERFILFINANCIERO
   add constraint FK_TPERFILF_REFERENCE_TTIPOPER foreign key (IDTIPOPERSONA)
      references Proveedores.TTIPOPERSONA (ID)
go

alter table Proveedores.TPREGUNTA
   add constraint FK_TPREGUNT_REFERENCE_TTIPOPER foreign key (IDTIPOPERFIL)
      references Proveedores.TTIPOPERFIL (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TENCABEZ foreign key (IDENCABEZADO)
      references Proveedores.TENCABEZADO (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TCALIFIC foreign key (IDCALIFICABURO)
      references Proveedores.TCALIFICABURO (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TPERFILE foreign key (IDPERFILEMPRESARIAL)
      references Proveedores.TPERFILEMPRESARIAL (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TINFORMA foreign key (IDINFORMACIONCONTACTO)
      references Proveedores.TINFORMACIONCONTACTO (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TPERFILF foreign key (IDPERFILFINANCIERO)
      references Proveedores.TPERFILFINANCIERO (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TIDENTIF foreign key (IDIDENTIFICACIONPROVEEDOR)
      references Proveedores.TIDENTIFICACIONPROVEEDOR (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TCALIFIC foreign key (IDCALIFICACION)
      references Proveedores.TCALIFICACION (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_REFERENCE_TPERFILD foreign key (IDPERFILDOCUMENTAL)
      references Proveedores.TPERFILDOCUMENTAL (ID)
go

alter table Proveedores.TPROVEEDOR
   add constraint FK_TPROVEED_USUARIO_S_TUSUARIO foreign key (IDUSUARIOSISTEMA)
      references Proveedores.TUSUARIOSISTEMA (ID)
go

alter table Proveedores.TPROVEEDORACTIVIDAD
   add constraint FK_TPROVEED_REFERENCE_TIDENTIF foreign key (IDIDENTIFICACIONPROVEEDOR)
      references Proveedores.TIDENTIFICACIONPROVEEDOR (ID)
go

alter table Proveedores.TPROVEEDORACTIVIDAD
   add constraint FK_TPROVEED_REFERENCE_TCATALOG foreign key (IDCATALOGOCATEGORIA)
      references Proveedores.TCATALOGOCATEGORIA (ID)
go

alter table Proveedores.TPROVINCIA
   add constraint FK_TPROVINC_REFERENCE_TPAIS foreign key (IDPAIS)
      references Proveedores.TPAIS (ID)
go

alter table Proveedores.TRATIOFINANCIERO
   add constraint FK_TRATIOFI_REFERENCE_TTIPORAT foreign key (IDTIPORATIO)
      references Proveedores.TTIPORATIO (ID)
go

alter table Proveedores.TRESPUESTA
   add constraint FK_TRESPUES_REFERENCE_TPREGUNT foreign key (IDPREGUNTA)
      references Proveedores.TPREGUNTA (ID)
go

alter table Proveedores.TRESPUESTASELECCIONADA
   add constraint FK_TRESPUES_REFERENCE_TRESPUES foreign key (IDRESPUESTA)
      references Proveedores.TRESPUESTA (ID)
go

alter table Proveedores.TRESPUESTASELECCIONADA
   add constraint FK_TRESPUES_REFERENCE_TTIPOPER foreign key (IDTIPOPERFIL)
      references Proveedores.TTIPOPERFIL (ID)
go

alter table Proveedores.TRESPUESTASELECCIONADA
   add constraint FK_TRESPUES_REFERENCE_TPROVEED foreign key (IDPROVEEDOR)
      references Proveedores.TPROVEEDOR (ID)
go

alter table Proveedores.TTIPOCONTRIBUYENTE
   add constraint FK_TTIPOCON_REFERENCE_TTIPOPER foreign key (IDTIPOPERSONA)
      references Proveedores.TIPOPERSONA (ID)
go

alter table Proveedores.TTIPORATIO
   add constraint FK_TTIPORAT_REFERENCE_TTIPOPER foreign key (IDTIPOPERSONA)
      references Proveedores.TTIPOPERSONA (ID)
go

alter table Proveedores.TTIPORATIOCUENTA
   add constraint FK_TTIPORAT_REFERENCE_TTIPORAT foreign key (IDTIPORATIO)
      references Proveedores.TTIPORATIO (ID)
go

alter table Proveedores.TTIPORATIOCUENTA
   add constraint FK_TTIPORAT_REFERENCE_TCUENTA foreign key (IDCUENTA)
      references Proveedores.TCUENTA (ID)
go

alter table Proveedores.TUSUARIOPERFILSISTEMA
   add constraint FK_TUSUARIO_REFERENCE_TPERFILS foreign key (IDPERFILSISTEMA)
      references Proveedores.TPERFILSISTEMA (ID)
go

alter table Proveedores.TUSUARIOPERFILSISTEMA
   add constraint FK_TUSUARIO_REFERENCE_TUSUARIO foreign key (IDUSUARIOSISTEMA)
      references Proveedores.TUSUARIOSISTEMA (ID)
go
