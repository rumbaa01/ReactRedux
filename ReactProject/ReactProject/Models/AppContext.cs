﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ReactProject.Models
{
    public class AppContext : DbContext
    {
        public DbSet<Month> Months { get; set; }
    }
}