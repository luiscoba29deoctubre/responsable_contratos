/****** Script for SelectTopNRows command from SSMS  ******/
SELECT *
FROM [DBBUSINTEGRACIONDESA].[Proveedores_test].[ttiporatio]

SELECT *
FROM [DBBUSINTEGRACIONDESA].[Proveedores_test].[ttipopersona]

SELECT *
FROM [DBBUSINTEGRACIONDESA].[Proveedores_test].[ttiporatiocuenta]

SELECT *
FROM [DBBUSINTEGRACIONDESA].[Proveedores_test].[tcuenta]

select * from [DBBUSINTEGRACIONDESA].[Proveedores_test].tformularatio

select * From [Proveedores_test].tcuentaperfilfinanciero



select * From [Proveedores_test].tperfilfinanciero


select * From [Proveedores_test].tproveedor
select * From [Proveedores_test].tidentificacionproveedor
select * From [Proveedores_test].tproveedor

create view VW_



SELECT a.id, a.IDTIPOPERSONA, a.nombre, VALOROPTIMO , b.nombre, d.NOMBRE, g.IDTIPORATIO, g.NOMBRE
FROM [Proveedores_test].[ttiporatio] a, [Proveedores_test].[ttipopersona] b, 
[Proveedores_test].[ttiporatiocuenta] c,[Proveedores_test].[tcuenta] d,
[Proveedores_test].tcuentaperfilfinanciero e, [Proveedores_test].tperfilfinanciero f,
[Proveedores_test].tformularatio g
where a.IDTIPOPERSONA = b.ID
and c.IDTIPORATIO = a.ID
and c.IDCUENTA = d.ID
and d.ID = e.IDCUENTA
and f.ID=e.IDPERFILFINANCIERO
and a.ID = g.IDTIPORATIO
order by  a.nombre

select * from [Proveedores_test].[ttiporatio]

select * from [Proveedores_test].[tcuenta]

select * from [Proveedores_test].[ttiporatiocuenta]


select *--nombre, [Proveedores_test].FNC_RATIO(1,2) as suma
from [Proveedores_test].tformularatio

select * from [Proveedores_test].[ttiporatio]
select * from [Proveedores_test].[ttiporatiocuenta]
select * from [Proveedores_test].[tcuenta]
select * From [Proveedores_test].tcuentaperfilfinanciero


ALTER FUNCTION [Proveedores_test].FNC_RATIO(@vtiporatio int,@vtipocuenta int,@val1 Decimal(7,2),@val2 Decimal(7,2))  
returns decimal(7,2)  
as  
Begin  
    DECLARE @Result Decimal(7,2)  
    SET @Result = @val1 + @val2  
    RETURN @Result  
end


print [Proveedores_test].FNC_RATIO(11,13)  

select * From [Proveedores_test].tcuentaperfilfinanciero

------------------------------
------------------------------
alter view [Proveedores_test].VW_FINANCIERO_TOTALES AS
select V.IDRATIO, V.IDPERFILFINANCIERO, ID_PROVEEDOR,V.NOMBRERATIO, [	ACTIVO	] AS ACTIVO,[	PASIVO	] AS PASIVO,[	PATRIMONIO	] AS PATRIMONIO,[	ACTIVO CORRIENTE	] AS ACTIVO_CORRIENTE,[	PASIVO CORRIENTE	] AS PASIVO_CORRIENTE,[	UTILIDAD NETA	] AS UTILIDAD_NETA,[	GASTOS	] AS GASTOS,
[Proveedores_test].FNC_RATIO(
V.IDRATIO,[	ACTIVO	],[	PASIVO	],[	PATRIMONIO	],
[	ACTIVO CORRIENTE	],[	PASIVO CORRIENTE	],[	UTILIDAD NETA	],[	GASTOS	]) AS CALCULORATIO,
(select max(tr.porcentaje) from
[Proveedores_test].[tratiofinanciero] tr
where tr.IDTIPORATIO = V.IDRATIO
and tr.ratio <= Cast(Round(
[Proveedores_test].FNC_RATIO(
V.IDRATIO,[	ACTIVO	],[	PASIVO	],[	PATRIMONIO	],
[	ACTIVO CORRIENTE	],[	PASIVO CORRIENTE	],[	UTILIDAD NETA	],[	GASTOS	]),1,1) as decimal(18,2))) as PORCENTAJE,
1 as estado
From [Proveedores_test].VW_FINANCIERO V


select * from [Proveedores_test].VW_FINANCIERO_TOTALES

----------------------------
----------------------------

ALTER view [Proveedores_test].VW_FINANCIERO AS
    select * from (
    select d.ID AS IDRATIO, b.NOMBRE , a.RESULTADOANIOULTIMO, a.idperfilfinanciero, e.ID as ID_PROVEEDOR,d.NOMBRE as NOMBRERATIO
    from [Proveedores_test].tcuentaperfilfinanciero a, [Proveedores_test].[tcuenta] b,
    [Proveedores_test].[ttiporatiocuenta] c, [Proveedores_test].[ttiporatio] d, [Proveedores_test].tproveedor e
    where a.IDCUENTA = b.ID and c.IDTIPORATIO = d.ID and b.ID = c.IDCUENTA
    and e.IDPERFILFINANCIERO = a.IDPERFILFINANCIERO
    ) TABLA
    PIVOT (
    SUM(RESULTADOANIOULTIMO)
    FOR NOMBRE
    IN
    ([	ACTIVO	],[	PASIVO	],[	PATRIMONIO	],[	ACTIVO CORRIENTE	],[	PASIVO CORRIENTE	],[	UTILIDAD NETA	],[	GASTOS	])
    --(select NOMBRE from [Proveedores_test].[tcuenta])
    ) as PIVOTABLE


select *
from [Proveedores_test].tformularatio

select *
From [Proveedores_test].VW_FINANCIERO A, [Proveedores_test].tformularatio B
WHERE A.IDRATIO = B.IDTIPORATIO

select * from [Proveedores_test].tproveedor



ALTER FUNCTION [Proveedores_test].FNC_RATIO(
@vtiporatio int,
@activo Decimal(15,2),
@pasivo Decimal(15,2),
@patrimonio Decimal(15,2),
@actcorriente Decimal(15,2),
@pascorriente Decimal(15,2),
@utilneta Decimal(15,2),
@gasto Decimal(15,2))
returns decimal(15,2)  
as

BEGIN  
DECLARE
@Result Decimal(15,2),
@FORMULA VARCHAR   

   --select @FORMULA=NOMBRE from [Proveedores_test].tformularatio B where nombre like  '%/%' and IDTIPORATIO = @vtiporatio;
    IF @vtiporatio =  1
    BEGIN
    SELECT @Result = 0
    END
    IF @vtiporatio =  2
    BEGIN
    SELECT @Result = @pasivo/@patrimonio
    END
    IF @vtiporatio =  3
    BEGIN
    SELECT @Result =  @activo/@pasivo
    END
    IF @vtiporatio =  4
    BEGIN
    SELECT @Result = @actcorriente/@pascorriente
    END
    IF @vtiporatio =  5
    BEGIN
    SELECT @Result = @actcorriente-@pascorriente
    END
    IF @vtiporatio =  6
    BEGIN
    SELECT @Result = @utilneta/@activo
    END
    IF @vtiporatio =  7
    BEGIN
    SELECT @Result = @utilneta/@patrimonio
    END
    
    RETURN @Result  
END


select * from
[Proveedores_test].[tratiofinanciero]
where IDTIPORATIO = 6
and ratio <=Cast(Round(0.70,1,1) as decimal(18,2))
and ratio >= Cast(Round(0.70,1,1) as decimal(18,2))

select max(tr.porcentaje) from
[Proveedores_test].[tratiofinanciero] tr
where tr.IDTIPORATIO = 6
and tr.ratio <= Cast(Round(1.67,1,1) as decimal(18,2))

select ROUND(1.67,0)

SELECT TRUNCATE(1.67,2)

SELECT TRUNCATE(123.4567,-2)

SELECT Cast(Round(1.67,1,1) as decimal(18,2))

IDRATIO	CALCULORATIO
2	1.67
3	0.70
4	0.73
5	-4.00
6	2.14
7	2.50

---------------------CATEGORIAS-----------------

select * from [Proveedores_test].tproveedor
where id = 37 and IDIDENTIFICACIONPROVEEDOR = 6;

select * from [Proveedores_test].tidentificacionproveedor
where id = 6

select * from [Proveedores_test].tproveedoractividad
where IDIDENTIFICACIONPROVEEDOR = 6;

select * from [Proveedores_test].tcatalogocategoria
where id = 16

select * from [Proveedores_test].tcategoria

select * from [Proveedores_test].tactividad
