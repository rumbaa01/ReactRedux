using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactProject.Models
{
    public class Month
    {
        public int Id { get; set; }

        public string MonthName { get; set; }

        public int Year { get; set; }

        public int Pay { get; set; }
    }
}