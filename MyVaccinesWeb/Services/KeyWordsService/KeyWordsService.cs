using Microsoft.EntityFrameworkCore;

namespace MyVaccinesWeb.Services.KeyWordsService
{
    public class KeyWordsService : IKeyWordsService
    {
        private readonly ProceduresContext Context;

        public KeyWordsService(ProceduresContext context)
        {
            Context = context;
        }

        public async Task<bool> AddKeyWordAsync(KeyWord keyWord)
        {
            var keyWords = Context.KeyWords.ToList();
            foreach (var item in keyWords)
            {
                if (item.Word.ToLower().Replace(" ", "") == keyWord.Word.ToLower().Replace(" ", ""))
                    return false;
            }
            Context.KeyWords.Add(keyWord);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteKeyWordAsync(int id)
        {
            var keyWord = await Context.KeyWords.FindAsync(id);
            if (keyWord is null)
                return false;
            Context.KeyWords.Remove(keyWord);
            await Context.SaveChangesAsync();
            return true;
        }

        public async Task<List<KeyWord>?> GetAllKeyWordsAsync()
        {
            return await Context.KeyWords.ToListAsync();
        }

        public async Task<KeyWord?> GetSingleKeyWordAsync(int id)
        {
            return await Context.KeyWords.FindAsync(id);
        }
    }
}
