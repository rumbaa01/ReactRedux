using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ReactProject.Models;
using ReactProject.Interfaces;

namespace ReactProject.Controllers
{   
    public class MonthController : ApiController
    {
        private readonly IRepository _repository;

        public MonthController(IRepository repository)
        {
            _repository = repository;
        }
        AppContext db = new AppContext();

        public IEnumerable<Month> GetMonths()
        {
            return db.Months;
        }

        [HttpPost]
        public Month PostMonths([FromBody]Month model) 
        {
            db.Months.Add(model);
            db.SaveChanges();
            return model;
        }
        [HttpDelete]
        public void DeleteMonth(int id)
        {
            Month monthForDelete = db.Months.Find(id);
            db.Months.Remove(monthForDelete);
            db.SaveChanges();
        }

    }
}