namespace MyVaccinesWeb.Services.VaccineService
{
    public interface IVaccineService
    {
        Task<List<Vaccine>?> GetAllVaccinesAsync();
        Task<Vaccine?> GetSingleVaccineAsync(int id);
        Task<bool> AddVaccineAsync(Vaccine vaccine);
        Task<bool> DeleteVaccineAsync(int id);
    }
}
