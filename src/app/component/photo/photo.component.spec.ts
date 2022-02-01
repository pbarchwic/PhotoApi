import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PhotoComponent],
    }).compileComponents();
  });

  it('should create the photo component', () => {
    const fixture = TestBed.createComponent(PhotoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
