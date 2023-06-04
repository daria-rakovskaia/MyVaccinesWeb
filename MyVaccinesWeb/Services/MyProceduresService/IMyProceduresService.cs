namespace MyVaccinesWeb.Services.MyProceduresService
{
    public interface IMyProceduresService
    {
        Task<List<MyProcedure>?> GetAllProceduresAsync(int userId);
    }
}
