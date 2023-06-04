using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using System.Net.WebSockets;
using System.Security.Cryptography.Xml;

namespace MyVaccinesWeb.Services.ProceduresService
{
    public class ProceduresService : IProceduresService
    {
        private readonly ProceduresContext Context;

        public ProceduresService(ProceduresContext context)
        {
            Context = context;
        }

        public Task<List<MyProcedure>?> AddProcedureAsync(MyProcedure procedure)
        {
            throw new NotImplementedException();
        }

        public Task<List<MyProcedure>?> DeleteProcedureAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<MyProcedure>?> GetAllProceduresAsync()
        {
            return await Context.MyProcedures.ToListAsync();
        }

        public async Task<MyProcedure?> GetSingleProcedureAsync(int id)
        {
            return await Context.MyProcedures.FindAsync(id);
        }
    }
}
