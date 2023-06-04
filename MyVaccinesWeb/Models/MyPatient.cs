using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MyVaccinesWeb.Models;

public partial class MyPatient
{
    public int Id { get; set; }

    public string Surname { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Patronymic { get; set; } = null!;

    public int TypeId { get; set; }

    [JsonIgnore]
    public virtual ICollection<MyProcedure> MyProcedures { get; set; } = new List<MyProcedure>();

    public virtual PatientsType Type { get; set; } = null!;
}
