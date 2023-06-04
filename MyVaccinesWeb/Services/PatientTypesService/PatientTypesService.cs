using Microsoft.EntityFrameworkCore;
using MyVaccinesWeb.Models;

namespace MyVaccinesWeb.Services.PatientTypesService
{
    public class PatientTypesService : IPatientTypesService
    {
        private readonly ProceduresContext Context;

        public PatientTypesService(ProceduresContext context)
        {
            Context = context;
        }

        public async Task<bool> AddPatientTypeAsync(PatientsType patientType)
        {
            var patientTypes = Context.PatientsTypes.ToList();
            foreach (var item in patientTypes)
            {
                if (item.Name.ToLower().Replace(" ", "") == patientType.Name.ToLower().Replace(" ", ""))
                    return false;
            }
            Context.PatientsTypes.Add(patientType);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletePatientTypeAsync(int id)
        {
            var patientType = await Context.PatientsTypes.FindAsync(id);
            if (patientType is null)
                return false;
            Context.PatientsTypes.Remove(patientType);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<List<PatientsType>?> GetAllPatientTypesAsync()
        {
            var patientsTypes = await Context.PatientsTypes.ToListAsync();
            foreach (var patient in patientsTypes)
            {
                patient.Name = patient.Name.Trim();
            }
            return patientsTypes;
        }

        public async Task<PatientsType?> GetSinglePatientTypeAsync(int id)
        {
            return await Context.PatientsTypes.FindAsync(id);
        }
    }
}
