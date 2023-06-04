namespace MyVaccinesWeb.Services.DoneProceduresService
{
    public interface IDoneProceduresService
    {
        Task<List<MyProcedure>?> GetAllDoneProceduresAsync(int userId);
    }
}
