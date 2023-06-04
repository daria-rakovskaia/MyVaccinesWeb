namespace MyVaccinesWeb.Services.ProceduresService
{
    public interface IProceduresService
    {
        Task<List<MyProcedure>?> GetAllProceduresAsync();
        Task<MyProcedure?> GetSingleProcedureAsync(int id);
        Task<List<MyProcedure>?> AddProcedureAsync(MyProcedure procedure);
        Task<List<MyProcedure>?> DeleteProcedureAsync(int id);
    }
}
