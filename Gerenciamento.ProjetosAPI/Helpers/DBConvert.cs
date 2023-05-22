namespace Gerenciamento.ProjetosAPI.Helpers
{
    public static class DBConvert
    {
        public static T ConvertFromDBVal<T>(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return default;
            }
            else
            {
                return (T)Convert.ChangeType(obj, typeof(T));
            }
        }

        public static string ConvertFromDBVal(object obj)
        {
            if (obj != null && obj != DBNull.Value)
            {
                var result = obj.ToString();
                if (result != null && result.Length > 0)
                {
                    return result.TrimEnd();
                }
            }
            return "";
        }

    }
}
#pragma warning restore CS1591
