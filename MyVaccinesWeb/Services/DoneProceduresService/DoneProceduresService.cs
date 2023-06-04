namespace MyVaccinesWeb.Services.DoneProceduresService
{
    public class DoneProceduresService : IDoneProceduresService
    {
        private readonly ProceduresContext Context;

        public DoneProceduresService(ProceduresContext context)
        {
            Context = context;
        }

        public async Task<List<MyProcedure>?> GetAllDoneProceduresAsync(int userId)
        {
            var myProcedures = await Context.MyProcedures.Where(p => p.UserId == userId)
                                    .Include(p => p.Patient).Include(p => p.Patient.Type).Include(p => p.Vaccine)
                                    .Include(p => p.Vaccine.Type).ToListAsync();
            var doneProcedures = await Context.ProceduresDones.ToListAsync();
            var doneIds = new SortedSet<int>();
            var result = new List<MyProcedure>();
            foreach (var procedure in doneProcedures)
                doneIds.Add(procedure.ProcedureId);
            foreach (MyProcedure p in myProcedures)
            {
                if (doneIds.Contains(p.Id))
                {
                    p.Patient.Surname = p.Patient.Surname.Trim();
                    p.Patient.Name = p.Patient.Name.Trim();
                    p.Patient.Patronymic = p.Patient.Patronymic.Trim();
                    p.Patient.Type.Name = p.Patient.Type.Name.Trim();
                    p.Vaccine.Name = p.Vaccine.Name.Trim();
                    p.Vaccine.Type.Name = p.Vaccine.Type.Name.Trim();
                    result.Add(p);
                }
            }
            return result;
        }
    }
}
