using Microsoft.EntityFrameworkCore;

namespace MyVaccinesWeb.Services.VaccineTypesService
{
    public class VaccineTypesService : IVaccineTypesService
    {
        private readonly ProceduresContext Context;

        public VaccineTypesService(ProceduresContext context)
        {
            Context = context;
        }

        public async Task<bool> AddVaccineTypeAsync(VaccinesType vaccineType)
        {
            var vaccineTypes = Context.VaccinesTypes.ToList();
            foreach (var item in vaccineTypes)
            {
                if (item.Name.ToLower().Replace(" ", "") == vaccineType.Name.ToLower().Replace(" ", ""))
                    return false;
            }
            Context.VaccinesTypes.Add(vaccineType);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteVaccineTypeAsync(int id)
        {
            var vaccineType = await Context.VaccinesTypes.FindAsync(id);
            if (vaccineType is null)
                return false;
            Context.VaccinesTypes.Remove(vaccineType);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<List<VaccinesType>?> GetAllVaccineTypesAsync()
        {
            return await Context.VaccinesTypes.ToListAsync();
        }

        public async Task<VaccinesType?> GetSingleVaccineTypeAsync(int id)
        {
            return await Context.VaccinesTypes.FindAsync(id);
        }
    }
}
