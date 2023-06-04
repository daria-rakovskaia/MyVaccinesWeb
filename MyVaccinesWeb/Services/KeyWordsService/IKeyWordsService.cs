namespace MyVaccinesWeb.Services.KeyWordsService
{
    public interface IKeyWordsService
    {
        Task<List<KeyWord>?> GetAllKeyWordsAsync();
        Task<KeyWord?> GetSingleKeyWordAsync(int id);
        Task<bool> AddKeyWordAsync(KeyWord keyWord);
        Task<bool> DeleteKeyWordAsync(int id);
    }
}
