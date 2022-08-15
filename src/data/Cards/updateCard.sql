UPDATE [crud].[dbo].[Cards] set 
CardTitle = @CardTitle,
CardDescription = @CardDescription,
ExecutionCardDate = @ExecutionCardDate,
CreateCardDate = @CreateCardDate
WHERE CardId = @CardId;

SELECT
CardTitle,
CardDescription,
ExecutionCardDate,
CreateCardDate
FROM  [crud].[dbo].[Cards]  
WHERE CardId = @CardId;
