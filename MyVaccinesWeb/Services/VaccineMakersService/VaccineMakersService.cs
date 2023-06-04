using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using MyVaccinesWeb.My_Classes;

namespace MyVaccinesWeb.Services.VaccineMakersService
{
    public class VaccineMakersService : IVaccineMakersService
    {
        private readonly ProceduresContext Context;

        public VaccineMakersService(ProceduresContext context)
        {
            Context = context;
        }

        public async Task<bool> AddVaccineMakerAsync(MyVaccineMakers vaccineMaker)
        {
            vaccineMaker.AddVaccineMaker(Context);
            return await Context.SaveChangesAsync() >= 1;
        }

        public async Task<bool> DeleteVaccineMakerAsync(int id)
        {
            var vaccineMaker = await Context.VaccinesMakers.FindAsync(id);
            if (vaccineMaker is null)
                return false;
            Context.VaccinesMakers.Remove(vaccineMaker);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<List<VaccinesMaker>?> GetAllVaccineMakersAsync()
        {
            return await Context.VaccinesMakers.Include(vm => vm.Country).ToListAsync();
        }

        public async Task<VaccinesMaker?> GetSingleVaccineMakerAsync(int id)
        {
            return await Context.VaccinesMakers.Include(vm => vm.Country).FirstOrDefaultAsync(vm => vm.Id == id);
        }

        public async Task<bool> UpdateVaccineMakerAsync(int id, MyVaccineMakers vaccineMaker)
        {
            vaccineMaker.UpdateVaccineMaker(id, Context);
            return await Context.SaveChangesAsync() >= 1;
        }
    }
}
