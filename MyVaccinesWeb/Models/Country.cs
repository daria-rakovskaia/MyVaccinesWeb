﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MyVaccinesWeb.Models;

public partial class Country
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<VaccinesMaker> VaccinesMakers { get; set; } = new List<VaccinesMaker>();
}
