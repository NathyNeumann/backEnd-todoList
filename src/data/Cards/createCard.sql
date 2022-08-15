INSERT INTO [crud].[dbo].[Cards] (
    [CardTitle],
	[CardDescription],
	[CreateCardDate],
	[ExecutionCardDate],
	[UserCardId])
VALUES (
    @cardTitle,
    @cardDescription,
    @createCardDate,
    @ExecutionCardDate,
    @UserCardId
);

SELECT SCOPE_IDENTITY() as CardId;
