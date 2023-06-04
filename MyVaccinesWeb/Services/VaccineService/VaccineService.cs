using Microsoft.EntityFrameworkCore;

namespace MyVaccinesWeb.Services.VaccineService
{
    public class VaccineService : IVaccineService
    {
        private readonly ProceduresContext Context;

        public VaccineService(ProceduresContext context)
        {
            Context = context;
        }
        
        public async Task<bool> AddVaccineAsync(Vaccine vaccine)
        {
            //var vaccines = Context.Vaccines.ToList();
            //foreach (var item in vaccines)
            //{
            //    if (item.Equals(vaccine))
            //        return false;
            //}
            Context.Vaccines.Add(vaccine);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteVaccineAsync(int id)
        {
            var vaccine = await Context.Vaccines.FindAsync(id);
            if (vaccine is null)
                return false;
            Context.Vaccines.Remove(vaccine);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<List<Vaccine>?> GetAllVaccinesAsync()
        {
            var vaccines = await Context.Vaccines.Include(v => v.Maker).Include(v => v.Type).ToListAsync();
            foreach (var vaccine in vaccines)
            {
                vaccine.Name = vaccine.Name.Trim();
                vaccine.Type.Name = vaccine.Type.Name.Trim();
                vaccine.Maker.Name = vaccine.Maker.Name.Trim();
            }
            return vaccines;
        }

        public async Task<Vaccine?> GetSingleVaccineAsync(int id)
        {
            return await Context.Vaccines.FindAsync(id);
        }
    }
}
