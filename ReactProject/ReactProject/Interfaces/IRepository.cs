using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactProject.Models;

namespace ReactProject.Interfaces
{
    public interface IRepository
    {
        IEnumerable<Month> GetAllMonth();
    }
}
