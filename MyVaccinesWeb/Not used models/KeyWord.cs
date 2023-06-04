using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MyVaccinesWeb.Models;

public partial class KeyWord
{
    public int Id { get; set; }

    public string Word { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<ProceduresKeyWord> ProceduresKeyWords { get; set; } = new List<ProceduresKeyWord>();
}
