using System;
using System.Collections.Generic;

namespace MyVaccinesWeb.Models;

public partial class ProceduresDone
{
    public int Id { get; set; }

    public int ProcedureId { get; set; }

    public virtual MyProcedure Procedure { get; set; } = null!;
}
